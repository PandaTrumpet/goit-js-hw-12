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
let currentPage = 1;

async function handler(event) {
  event.preventDefault();

  list.innerHTML = null;

  let query = event.target.elements.input.value.trim();

  try {
    const data = await getNewFotos(query, 15, 1);

    if (data.hits.length === 0) {
      list.innerHTML = '';
      loader.style.display = 'none';
      loadMoreBtn.classList.add('is-hidden');
      return handlerError();
    } else {
      makeMarkup(data.hits);
      lightbox.refresh();
      currentQuery = query;
      currentPage = 1;
      loader.style.display = 'none';

      if (data.hits.length < 15) {
        loadMoreBtn.style.display = 'none';
        handlerErrorResult();
      } else {
        loadMoreBtn.style.display = 'block';
      }
    }
  } catch (error) {
    console.error(error);
  }
}

searchForm.addEventListener('submit', handler);

function loadImages(e) {
  e.preventDefault();
  let currentQuery = input.value;

  list.insertAdjacentElement('afterend', loader);
  loader.style.display = 'inline-block';
  currentPage++;

  getNewFotos(currentQuery, 15, currentPage).then(data => {
    if (data.hits.length === 0) {
      loader.style.display = 'none';
      loadMoreBtn.style.display = 'none';
      return handlerErrorResult();
    } else {
      makeMarkup(data.hits);
      lightbox.refresh();
      loader.style.display = 'none';
      const boxFotos = document.querySelector('.photo-main-list');
      const rect = boxFotos.getBoundingClientRect();
      window.scrollBy(0, rect.height * 2);

      if (data.hits.length < 15) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
    }
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
