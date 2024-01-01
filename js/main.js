const modifiers = {
    siteheadercartmodalopen:'site-header__cart-modal--open',
    ImgThumbnailActive: 'img-showcase__thumbnail-active',
    lightboxOpen:'lightbox--open'
}

// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener ('click', function (evt) {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle(modifiers.siteheadercartmodalopen);
    });
};

// Image showcase
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');


elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function (){
        // Remove active state from allbuttons 
        elsImgThumbnail.forEach(function (elImgThumbnial){
            elImgThumbnial.classList.remove(modifiers.ImgThumbnailActive);
        });
        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

        // Update active image src accordingly
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;

    });
});

// LIGHTBOX

const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightboxClose = document.querySelector('.js-lightbox-close');

if(elLightboxToggler) {
    elLightboxToggler.addEventListener('click', function (){
        elLightbox.classList.add(modifiers.lightboxOpen);
    });
}

if(elLightboxClose) {
    elLightboxClose.addEventListener('click', function (){
        elLightbox.classList.remove(modifiers.lightboxOpen);
    });
}


// THUMBNAIL CLICK
const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');


elsImgLightboxThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function (){
        // Remove active state from allbuttons 
        elsLightboxImgThumbnail.forEach(function (elImgThumbnial){
            elImgThumbnial.classList.remove(modifiers.ImgThumbnailActive);
        });
        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.ImgThumbnailActive);

        // Update active image src accordingly
        elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;

    });
});

// lightbox control

const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if(elLightboxControlNext){
    elLightboxControlNext.addEventListener('click', function (){
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');

        // Remove active li element's style
        elActiveItem.classList.remove(modifiers.ImgThumbnailActive);
        
        let elNextActiveItem;
        
        if (elActiveItem.nextElementSibling === null) {
            elNextActiveItem = elsLightboxImgThumbnail[0];
        } else{
            elNextActiveItem = elActiveItem.nextElementSibling;
        }

        elNextActiveItem.classList.add(modifiers.ImgThumbnailActive);

         // Update active image src accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;


    });
}

if(elLightboxControlPrev){
    elLightboxControlPrev.addEventListener('click', function (){
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail-active');

        // Remove active li element's style
        elActiveItem.classList.remove(modifiers.ImgThumbnailActive);
        
        let elPrevActiveItem;
        
        if (elActiveItem.previousElementSibling === null) {
            elPrevActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length -1];
        } else{
            elPrevActiveItem = elActiveItem.previousElementSibling;
        }

        elPrevActiveItem.classList.add(modifiers.ImgThumbnailActive);

         // Update active image src accordingly
        elImgLightboxActiveImg.src = elPrevActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elPrevActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elPrevActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;


    });
}


// PRODCUT COUNT

const elProductQtyDecrementButton = document.querySelector(".js-product__quantity-decrement-button");
const elProductQtyIncrementButton = document.querySelector(".js-product__quantity-increment-button");
const elProductQty = document.querySelector('.product-info__quantity');

if (elProductQtyIncrementButton) {
    elProductQtyIncrementButton.addEventListener('click', function(){
        elProductQty.textContent = parseInt(elProductQty.textContent, 10) +1;
        
    });
} 

if (elProductQtyDecrementButton) {
    elProductQtyDecrementButton.addEventListener('click', function(){
        const qty = parseInt(elProductQty.textContent, 10);

        if(qty > 0){
            elProductQty.textContent = qty -1;

        }
        
    });
}