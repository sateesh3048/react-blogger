class BrowserStorage {

  static getAuthToken(){
    return localStorage.getItem("__Blg_Auth_jsonToken__");
  }

  static setAuthToken(auth_token){
    localStorage.setItem("__Blg_Auth_jsonToken__", auth_token);
  }

  static removeAuthToken(){
    localStorage.removeItem("__Blg_Auth_jsonToken__");
  }

  static getAuthExpirationDate(){
    return localStorage.getItem("__Blg_Auth_ExpirationDate__");
  }

  static setAuthExpirationDate(expirationDate){
    localStorage.setItem("__Blg_Auth_ExpirationDate__", expirationDate)
  }

  static removeExpirationDate(){
    localStorage.removeItem("__Blg_Auth_ExpirationDate__");
  }

  static getSessionDuration(){
    let expirationDate = BrowserStorage.getAuthExpirationDate();
    const expirationTime = new Date(expirationDate).getTime();
    const currentTime = new Date().getTime();
    const duration = ((expirationTime-currentTime)/1000);
    return duration;
  }
}

export default BrowserStorage;