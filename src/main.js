import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import makeMarkup from './js/render-functions';
import getNewFotos from './js/pixabay-api';

const input = document.querySelector('.input-text');
const searchForm = document.querySelector('.main-form');
const loadMoreBtn = document.querySelector('.load-btn');
const list = document.querySelector('.todo-list');
const loader = document.querySelector('.loading');

const lightbox = new SimpleLightbox('.todo-list a.galery-link', {
  captionsData: 'alt',
  captionDelay: 500,
});
let currentQuery;

export default function handler(event) {
  event.preventDefault();

  list.innerHTML = null;

  let query = event.target.elements.input.value.trim();

  getNewFotos(query, 15, 1).then(data => {
    if (data.hits.length === 0) {
      list.innerHTML = '';
      loader.style.display = 'none';
      loadMoreBtn.classList.add('is-hidden');
      return handlerError();
    }
    loader.style.display = 'inline-block';
    makeMarkup(data.hits);

    lightbox.refresh();

    currentQuery = query;
    currentPage = 1;
    loader.style.display = 'none';
  });
  loadMoreBtn.classList.remove('is-hidden');
}

searchForm.addEventListener('submit', handler);

let currentPage = 1;

function loadImages(e) {
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

    lightbox.refresh();

    loader.style.display = 'none';

    const boxFotos = document.querySelector('.photo-main-list');
    const rect = boxFotos.getBoundingClientRect();
    window.scrollBy(0, rect.height * 2);
  });
}
loadMoreBtn.addEventListener('click', loadImages);

function handlerError() {
  iziToast.error({
    maxWidth: '432px',
    messageSize: '16px',
    titleColor: ' #fafafb',
    messageColor: '#fff',
    message: `Sorry, there are no images matching your search query. Please try again!`,
    closeOnEscape: true,
    position: 'topRight',
    backgroundColor: '#ed6f7c',
  });
}

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
