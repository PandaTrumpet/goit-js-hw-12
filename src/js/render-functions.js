import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.input-text');

const loadMoreBtn = document.querySelector('.load-btn');
const list = document.querySelector('.todo-list');
const loader = document.querySelector('.loading');
import getNewFotos from './pixabay-api';

export default function makeMarkup(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
        tags,
      }) => {
        return `<li class="photo-main-list">
        
<a class="galery-link"  href="${largeImageURL}">
<img class="photo" width="360" height="200" src="${webformatURL}" alt="${tags}" />
</a>

<ul class='list-menu'>
  <li class='description'>
    <h3 class='title'>Likes</h3>
    <p class='datas'>${likes}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Views</h3>
    <p class='datas'>${views}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Comments</h3>
    <p class='datas'>${comments}</p>
  </li>
  <li class='description'>
    <h3 class='title'>Downloads</h3>
    <p class='datas'>${downloads}</p>
  </li>
</ul>
</li>
`;
      }
    )
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

let currentPage = 1;

export function loadImages(e) {
  let currentQuery = input.value;

  list.insertAdjacentElement('afterend', loader);
  loader.style.display = 'inline-block';
  currentPage++;
  getNewFotos(currentQuery, 15, currentPage).then(data => {
    if (data.hits < 15) {
      loader.style.display = 'none';
      loadMoreBtn.style.display = 'none';
      return handlerErrorResult();
    }

    makeMarkup(data.hits);
    loader.style.display = 'none';

    const lightbox = new SimpleLightbox('.todo-list a.galery-link', {
      captionsData: 'alt',
      captionDelay: 500,
    });
    lightbox.refresh();

    loader.style.display = 'none';

    const boxFotos = document.querySelector('.photo-main-list');
    const rect = boxFotos.getBoundingClientRect();
    window.scrollBy(0, rect.height * 2);
  });
}
loadMoreBtn.addEventListener('click', loadImages);

function handlerErrorResult() {
  iziToast.error({
    maxWidth: '432px',
    messageSize: '16px',
    titleColor: ' #fafafb',
    messageColor: '#fff',
    message: "We're sorry, but you've reached the end of search results.",
    closeOnEscape: true,
    position: 'topRight',
    backgroundColor: '#ed6f7c',
  });
}



