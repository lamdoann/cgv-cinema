import axios from 'axios';

const baseUrl = ' https://www.cgv.vn/en/api/movie/';

export const fetchAll = async () => {
  const url = `${baseUrl}listSneakShow?cat=2`;
  const { data: { data } } = await axios.get(url);
  return data;
};

export const getDetail = async (id) => {
  const url = `${baseUrl}movie/id/${id}`;
  const { data: { data } } = await axios.get(url);
  return data;
};
