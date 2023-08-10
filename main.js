const menuEmail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const arrowCarritoIcon = document.querySelector('#arrow');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');

const countShoppingCart = document.querySelector('.navbar-shopping-cart div');
const totalAmount = document.querySelector('.total-amount');
const arrayProductCart = [];
// const addCartDetail = document.querySelector('.add-to-cart-button');
// addCartDetail.addEventListener('click', renderMyOrder);

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
arrowCarritoIcon.addEventListener('click', closeCarritoArrow);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// FUNCIONES PARA MOSTRAR SECCIONES DEL MENU Y OCULTAR OTRAS DEPENDIENDO DE CUAL VA A MOSTRARSE
function toggleDesktopMenu() {

    carritoMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    carritoMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    carritoMenu.classList.toggle('inactive');
}

function closeCarritoArrow() {
    carritoMenu.classList.add('inactive');
}

function openProductDetailAside(event) {
    carritoMenu.classList.add('inactive');

    // productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


// Se agregan los productos de la tienda en un array
const productList = [];
productList.push({
    name: 'Iphone 14 Pro Max 256GB',
    price: 25000,
    image: 'https://images.pexels.com/photos/15876529/pexels-photo-15876529/free-photo-of-gente-apple-iphone-conexion.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Iphone 14 128GB',
    price: 18000,
    image: 'https://s.yimg.com/uu/api/res/1.2/r59QHlsa_l1FsxxsVl7.6w--~B/aD0xMjYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0.cf.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Iphone 12 128GB',
    price: 15000,
    image: 'https://spectrum.ieee.org/media-library/image.jpg?id=27044748',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Samsung Galaxy S24 Ultra',
    price: 25000,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/02/impresiones-samsung-galaxy-s23-ultra-2943540.jpg?tf=3840x',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Samsung Galaxy Fold 5',
    price: 32000,
    image: 'https://images.samsung.com/es/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-kv-a.jpg?imbypass=true',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Nothing Phone 2',
    price: 18000,
    image: 'https://i2-prod.irishmirror.ie/incoming/article30443832.ece/ALTERNATES/s615/0_ELEV_ALAK_050-1.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Huawei P60 Pro 256GB',
    price: 22000,
    image: 'https://fdn2.mobgsm.com/vv/pics/huawei/huawei-p60-pro-1.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Huawei Mate 50 Pro 256GB',
    price: 28000,
    image: 'https://ss632.liverpool.com.mx/xl/1129195971.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Xiaomi 12 Pro 256GB',
    price: 18000,
    image: 'https://static3.pisapapeles.net/uploads/2022/05/XIAOMI-12-PRO-PISAPAPELES.NET-21.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Motorola Razr 40 Pro 256GB',
    price: 30000,
    image: 'https://cdn.smart-gsm.com/blog/wp-content/uploads/2023/06/Motorola-Razr-40-Ultra.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
//
productList.push({
    name: 'Poco X5 Pro 256GB',
    price: 5999,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/2b53f148-091c-41d3-82fe-efb215f73509.b7aafc40c9d62ff5220a33c7da4d4725.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Poco M5s 128GB',
    price: 3999,
    image: 'https://i.blogs.es/601548/pocom5s/original.webp',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Google Pixel 7 128GB',
    price: 11499,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519950_sd.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Google Pixel 6a 128GB',
    price: 6499,
    image: 'https://www.shop4you.com.mx/cdn/shop/products/6509966_sd.jpg?v=1661356312&width=1946',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'One Plus 11 256GB',
    price: 15999,
    image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-138310/OnePlus-11_featured-image-packshot-review-Recovered.jpg',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Honor Magic 5 Lite 128GB',
    price: 5599,
    image: 'https://www.celex.com/cdn/shop/products/honor-magic5lite-3_530x@2x.jpg?v=1678214224',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Realme 11 Pro+ 512GB',
    price: 10999,
    image: 'https://images.shopkees.com/uploads/cdn/images/500/4957593312_1687593343.webp',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Red Magic 8 Pro 256GB',
    price: 17499,
    image: 'https://miphonemx.com/cdn/shop/products/Hf7a783620f524647b7e8e5df871cd685E_jpg_960x960_jpg.webp?v=1672324558',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'Rog Phone 6 256GB',
    price: 19999,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/40349711-553e-47ef-84c0-936daac01a4d.4c526cb6aac154e0fc1d47c0b7894064.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});
productList.push({
    name: 'ZTE Axon 40 Pro 128GB',
    price: 6599,
    image: 'https://images.prismic.io/ztemobile/b74447c0-887a-4287-ab2f-507c756005d5_1-mob.jpg?auto=compress,format&rect=0,0,1200,1581&w=1200&h=1581',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ratione numquam laboriosam asperiores quod fugit nesciunt quidem? Alias officiis sapiente vel",
});


// Se maqueta la seccion a donde deben estar los productos recorriendo el array
// Renderizamos los productos
function renderProducts(arr){
    arr.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', function(){
            renderDetailsAside(product);
        });
        // productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        productInfoFigure.addEventListener('click', function() {
            renderMyOrder(product)
        });
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        
    })
}


// function renderProducts(arr){
//     for (product of arr) {
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');
    
//         // product = {name, price, image} -> product.image
//         const productImg = document.createElement('img');
//         productImg.setAttribute('src', product.image);
//         productImg.addEventListener('click', openProductDetailAside);
    
//         const productInfo = document.createElement('div');
//         productInfo.classList.add('product-info');
    
//         const productInfoDiv = document.createElement('div');
//         const productPrice = document.createElement('p');
//         productPrice.innerText = '$' + product.price;
//         const productName = document.createElement('p');
//         productName.innerText = product.name;
    
//         productInfoDiv.appendChild(productPrice);
//         productInfoDiv.appendChild(productName);
    
//         const productInfoFigure = document.createElement('figure');
//         const productImgCart = document.createElement('img');
//         productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
//         productInfoFigure.appendChild(productImgCart);
    
//         productInfo.appendChild(productInfoDiv);
//         productInfo.appendChild(productInfoFigure);
    
//         productCard.appendChild(productImg);
//         productCard.appendChild(productInfo);
    
//         cardsContainer.appendChild(productCard);
//     }
// }

renderProducts(productList);


function renderDetailsAside(product){
    productDetailContainer.classList.remove("inactive");

    const productImgeDetail = document.querySelector(".detail-img")
    const productPrice = document.querySelector(".product-info-secondary .product-price-detail");
    const productName = document.querySelector(".product-info-secondary .product-name-detail");
    const productDescription = document.querySelector(".product-description-detail");
    productPrice.innerHTML = "$ " + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.image);
    productDescription.innerHTML = product.description;
}


function renderMyOrder(product){
    //console.log("click");
    const shoppingCart = document.querySelector(".shopping-cart");
    
    const divShopingCart = document.createElement("div")
    divShopingCart.classList.add("div-ShopingCart")
    const figureMyOrder = document.createElement("figure");
    const imgIconMyOrder = document.createElement("img");
    imgIconMyOrder.setAttribute("src", product.image);
    const productName = document.createElement("p");
    productName.classList.add("name-my-order");
    productName.innerHTML =  product.name;
    const productPrice = document.createElement("p");
    productPrice.classList.add("price-my-order");
    productPrice.innerHTML = "$ "+ product.price;
    const imgIconDelete = document.createElement("img");
    imgIconDelete.setAttribute("src", "./icons/icon_close.png");

    shoppingCart.appendChild(divShopingCart);
    divShopingCart.appendChild(figureMyOrder);
    figureMyOrder.appendChild(imgIconMyOrder);
    divShopingCart.appendChild(productName);
    divShopingCart.appendChild(productPrice);
    divShopingCart.appendChild(imgIconDelete);

    /*---- Actualizamos la cantidad de productos y sumamos el resuktado.*/
    totalAmount.innerHTML = '$0.00'
    

    //const priceOrder = document.querySelectorAll(".price-my-order");
    //countShoppingCart.innerHTML = priceOrder.length;
    countShoppingCart.innerHTML = shoppingCart.childElementCount;
    totalAmount.innerHTML = Number(totalAmount.innerHTML.substring(1)) + product.price;
    arrayProductCart.push(Number(totalAmount.innerHTML));

    
    totalAmount.innerHTML ="$ "+ sumProducts(arrayProductCart); 

    /*Elimina producto de My Order* y actualiza eldato en el carrito*/
    imgIconDelete.addEventListener("click", function(){
        divShopingCart.remove();
        countShoppingCart.innerHTML = shoppingCart.childElementCount;
        
        const getTotal = document.querySelectorAll(".total-amount");
        const getTotalNumber = Number(Array.from(getTotal)[0].innerHTML.substring(1));

        getTotal[0].innerHTML = "$ " + (getTotalNumber - product.price);
        arrayProductCart.splice(-1,1); 
    })
}

function sumProducts(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
