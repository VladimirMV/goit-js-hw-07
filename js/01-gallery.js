import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
console.log(cardsMarkup);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function createGalleryCardsMarkup(galleryItems)  {
  return galleryItems
    .map(({ preview, original,description  }) => {
        return `
      
        <div class="gallery__item">
       <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
       </a>
     </div>
    `;
    })
    .join('');
}


function onGalleryContainerClick(evt) {
    const isGallerySwatchEl = evt.target.classList.contains('gallery__item');
    console.dir(  evt.target.dataset.source
        );
    if (!isGallerySwatchEl) {
      return;
    }
  
    const swatchEl = evt.target;
    console.log(swatchEl);
    // const parentColorCard = swatchEl.closest('.color-card');
  
    // removeActiveCardClass();
    // addActiveCardClass(parentColorCard);
    // setBodyBgColor(swatchEl.dataset.hex);
  }
