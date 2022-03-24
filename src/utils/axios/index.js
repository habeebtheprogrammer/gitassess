/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import Axios from 'axios';
export const baseURL = 'https://api.github.com';


const AxiosCall = async callObj => {

  const { path, method, data, contentType, headers , baseUrlType = null } = callObj;

  let url = `${baseURL}/${path}`;

  try {
    const response = await Axios({ method, url, data, headers, json: true });
    const result = response && response.data;
    return result;
  } catch (error) {
    throw error;
  }
};

export default AxiosCall;
