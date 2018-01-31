import axios from "axios";

const Axios = axios.create({
  baseURL: 'https://94c7b5df.ngrok.io'
});

export default Axios;