import axios from 'axios';

const KEY = '42475254-bcb32dbc18887673c1cce19dd';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

export default async function getNewFotos(query, amount, page) {
  const LINK = `${BASE_URI}?key=${KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&per_page=${amount}&page=${page} `;

  return await axios.get(LINK).then(res => {
    if (!res.status === 200) {
      throw new Error('Image is no found!!!');
    }

    return res.data;
  });
}


