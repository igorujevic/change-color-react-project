import axios from 'axios';

export const getData = async (url) => {
  try {
    let response = await axios.get(url);

    return response.data.colors[0].hex;
  } catch (error) {
    console.log(error);
  }
};
