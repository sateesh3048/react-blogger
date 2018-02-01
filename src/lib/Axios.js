import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://1be60d49.ngrok.io'
});

export default Axios;