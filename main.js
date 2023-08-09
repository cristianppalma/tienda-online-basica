const menuEmail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
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

function openProductDetailAside(event) {
    carritoMenu.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


// Se agregan los productos de la tienda en un array
const productList = [];
productList.push({
    name: 'Iphone 14 Pro Max 256GB',
    price: 25000,
    image: 'https://specials-images.forbesimg.com/imageserve/6321aca5df0a9fa9eee9950b/IMG-2758/960x0.jpg?cropX1=63&cropX2=1519&cropY1=104&cropY2=1074',
});
productList.push({
    name: 'Iphone 14 128GB',
    price: 18000,
    image: 'https://s.yimg.com/uu/api/res/1.2/r59QHlsa_l1FsxxsVl7.6w--~B/aD0xMjYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0.cf.jpg',
});
productList.push({
    name: 'Iphone 12 128GB',
    price: 15000,
    image: 'https://spectrum.ieee.org/media-library/image.jpg?id=27044748',
});
// productList.push({
//     name: 'Samsung Galaxy S24 Ultra',
//     price: 25000,
//     image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/02/impresiones-samsung-galaxy-s23-ultra-2943540.jpg?tf=3840x',
// });
// productList.push({
//     name: 'Samsung Galaxy Fold 5',
//     price: 32000,
//     image: 'https://images.samsung.com/es/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-kv-a.jpg?imbypass=true',
// });
// productList.push({
//     name: 'Nothing Phone 2',
//     price: 18000,
//     image: 'https://i2-prod.irishmirror.ie/incoming/article30443832.ece/ALTERNATES/s615/0_ELEV_ALAK_050-1.jpg',
// });
// productList.push({
//     name: 'Huawei P60 Pro 256GB',
//     price: 22000,
//     image: 'https://fdn2.mobgsm.com/vv/pics/huawei/huawei-p60-pro-1.jpg',
// });
// productList.push({
//     name: 'Huawei Mate 50 Pro 256GB',
//     price: 28000,
//     image: 'https://ss632.liverpool.com.mx/xl/1129195971.jpg',
// });
// productList.push({
//     name: 'Xiaomi 12 Pro 256GB',
//     price: 18000,
//     image: 'https://static3.pisapapeles.net/uploads/2022/05/XIAOMI-12-PRO-PISAPAPELES.NET-21.jpg',
// });
// productList.push({
//     name: 'Motorola Razr 40 Pro 256GB',
//     price: 30000,
//     image: 'https://cdn.smart-gsm.com/blog/wp-content/uploads/2023/06/Motorola-Razr-40-Ultra.jpg',
// });


// Se maqueta la seccion a donde deben estar los productos recorriendo el array
function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
