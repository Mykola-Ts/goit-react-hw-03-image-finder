import axios from 'axios';

export const parametersRequest = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '38342834-eb43385299074b454791d917b',
  perPage: 12,
  imageType: 'photo',
  orientation: 'horizontal',
};
export const arrCategories = [
  'fashion',
  'nature',
  'animals',
  'sports',
  'education',
  'travel',
  'transportation',
  'health',
  'people',
  'food',
  'computer',
  'science',
  'music',
  'buildings',
  'business',
];

export const searchImagesByQuery = async (searchQuery, page) => {
  const { BASE_URL, API_KEY, perPage, imageType, orientation } =
    parametersRequest;

  axios.defaults.baseURL = BASE_URL;

  const resp = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`
  );

  if (resp.status !== 200) {
    throw new Error('Oops, something went wrong. Try reloading the page.');
  }

  return resp.data;
};

export const fetchImagesByCategory = async function fetchImagesByCategory() {
  const options = {
    imageType: 'photo',
    orientation: 'horizontal',
    perPage: 3,
  };
  const arrOfPromises = arrCategories.map(async category => {
    const resp = await axios.get(
      `${parametersRequest.BASE_URL}?key=${parametersRequest.API_KEY}&q=${category}&image_type=${options.imageType}&orientation=${options.orientation}&safesearch=${options.safesearch}&per_page=${options.perPage}`
    );

    if (resp.status !== 200) {
      throw new Error('Oops, something went wrong. Try reloading the page.');
    }

    return resp.data;
  });

  const data = (await Promise.allSettled(arrOfPromises)).filter(
    ({ status }) => status === 'fulfilled'
  );

  if (!data.length) {
    throw new Error('Oops, something went wrong. Try reloading the page.');
  }

  return data;
};
