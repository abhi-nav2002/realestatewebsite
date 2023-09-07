import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'baae56c8admsh9be27ebeab518cbp19e7efjsn006eac4a0c90',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}