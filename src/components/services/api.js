import axios from 'axios';

export const parametersRequest = {
  BASE_URL: 'https://pixabay.com/api/',
  API_KEY: '38342834-eb43385299074b454791d917b',
  perPage: 12,
  imageType: 'photo',
  orientation: 'horizontal',
};

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
