import axios from "axios";
import BrowserStorage from '../lib/BrowserStorage';
export const Axios = axios.create({
  baseURL: 'https://12213a01.ngrok.io'
});

export const sessionHeaders = () => {
  return {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': BrowserStorage.getAuthToken()
      }
  }
}
export default Axios;