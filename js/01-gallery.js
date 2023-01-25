import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    .join("");
}

function onGalleryContainerClick(evt) {

  const isGallerySwatchEl = evt.target.classList.contains("gallery__image");
  evt.preventDefault();

  if (!isGallerySwatchEl) { return;}

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`);
  
  instance.show();

  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
