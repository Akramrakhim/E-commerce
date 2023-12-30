const modifiers = {
    ImgThumbnailActive: 'img-showcase__thumbnail-active'
}

// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener ('click', function (evt) {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');
    });
};

// Image showcase
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');


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