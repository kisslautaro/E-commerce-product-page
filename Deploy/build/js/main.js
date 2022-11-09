//Cambio de cantidad de articulos ingresado por el usuario
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');
let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

//CARRITO

//Agregar el total de productos al carrito cuando se presiona el boton Add to Cart
const addBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);
addBtn.addEventListener('click', ()=>{    
    lastValue = lastValue  + userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display= 'block';
    drawProductModal();
});


//Abrir modal de carrito
const cartModalBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
/* let priceModal = document.querySelector('.cart-modal__price'); */
const items = document.querySelector('.cart-modal__chekout-container');

cartModalBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');    
    if(lastValue === 0){
        items.innerHTML ='<p class="cart-empty"> Your cart is empty</p>';
        
    }else{
        drawProductModal();
    }
    
});


//Elinar Items del carrito
function deleteProduct(){
    const deleteBtn = document.querySelector('.cart-modal__delete');
    deleteBtn.addEventListener('click', ()=>{    
        items.innerHTML ='<p class="cart-empty"> Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
        cartNotification.style.display= 'none';

    });
}



//GALlERY


const imageContainer= document.querySelector('.gallery__image-container');
const nextBtn = document.querySelector('.gallery__next');
const previusBtn = document.querySelector('.gallery__previus');
let imgIndex = 1;


//Cambiar imagenes cuando se presione los botones flecha
nextBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})
previusBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
})
//cambiar img cuando se presiona algun thumbnail en el modal
let thumbnails = document.querySelectorAll('.gallery__thumnail');
thumbnails = [...thumbnails];
thumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click',()=>{        
        imageContainer.style.backgroundImage = `url('../../build/images/image-product-${event.target.id}.jpg')`;

    });
})
    


//GALLERY MODAL

//Mostrar el modal de imagenes cuadno click en la imagen principal

const modalOff = matchMedia("(orientation: portrait)");
const galleryModal = document.querySelector('.modal-gallery__background')

changeMediaQuery();
modalOff.addEventListener('change',()=>{
    changeMediaQuery();
})



    



//cambiar img cuando se presiona la flecha en el modal
const modalImageContainer= document.querySelector('.modal-gallery__image-container');
const modalnextBtn = document.querySelector('.modal-gallery__next');
const modalpreviusBtn = document.querySelector('.modal-gallery__previus');
modalnextBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
})
modalpreviusBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
})
//Cerrar modal gallery
const galleryModalClose = document.querySelector('.modal-gallery__close');

galleryModalClose.addEventListener('click', ()=>{
    galleryModal.style.display ='none';
})
//cambiar img cuando se presiona algun thumbnail en el modal
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumnail');
modalThumbnails = [...modalThumbnails];
modalThumbnails.forEach(modalThumbnail =>{
    modalThumbnail.addEventListener('click',()=>{

        modalImageContainer.style.backgroundImage = `url('../../build/images/image-product-${event.target.id.slice(-1)}.jpg')`;

    });
})
   
//MENU HAMBURGER

const menuIcon = document.querySelector('.header__menu');
const modalMenu = document.querySelector('.modal-navbar__background');
const closeIcon = document.querySelector('.modal-navbar__close-icon');
 menuIcon.addEventListener('click', ()=>{
    modalMenu.style.display ='block';
 })
 closeIcon.addEventListener('click', ()=>{
    modalMenu.style.display ='none';
 })



//FUNCIONES

function drawProductModal(){
    items.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./build/images/image-product-1-thumbnail.jpg" alt="product image">
        <div class="">
         <p class="cart-modal__product">Autumn Limited Edition..</p>
        <p class="cart-modal__price">$125.00 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./build/images/icon-delete.svg" alt="delete icon">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`

}


function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex=1;
    }else{
        imgIndex++;
    }
    
    imgContainer.style.backgroundImage = `url('../../build/images/image-product-${imgIndex}.jpg')`;

}


function changePreviusImage(imgContainer){
  
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    
    imgContainer.style.backgroundImage = `url('../../build/images/image-product-${imgIndex}.jpg')`;

}


function changeMediaQuery(){
    
if(modalOff.matches!=true){
    imageContainer.addEventListener('click', ()=>{
        galleryModal.style.display ='grid';
    });        
}else{
    imageContainer.addEventListener('click', ()=>{
        galleryModal.style.display ='none';
    });
}

}


