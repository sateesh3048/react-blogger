import axios from "axios";

class ArticleApi {

  static getAllArticles(){
    return axios.get("http://localhost:3000/articles.json")
    .then((response) => {
      console.log(" I am from article Api from response method");
      console.log(response);
      return response.data;  
    }).catch(error => {
      return error;
    });
  }

}

export default ArticleApi;