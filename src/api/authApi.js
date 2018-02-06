import Axios from '../lib/Axios';

class AuthApi {
  static Login(auth_params){
    return Axios.post('/auth/login.json', auth_params)
    .then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    })
  }
}

export default AuthApi;