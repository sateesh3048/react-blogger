import {Axios, sessionHeaders} from "../lib/Axios";
import Logger from '../lib/Logger';

class ArticleApi {
  static getAllArticles(){
    return Axios.get("/articles.json")
    .then((response) => {
      return response.data;  
    }).catch(error => {
      Logger.log_error(error.response);
      throw error;
    });
  };

  static getArticle(id){
    return Axios.get(`/articles/${id}.json`)
    .then(response => {
      return response.data;
    }).catch(error => {
      Logger.log_error(error.response);
      throw error;
    });
  };

  static createArticle(article){
    return Axios.post('/articles.json', article, sessionHeaders())
    .then(response => {
      return response.data;
    }).catch(error => {
      Logger.log_error(error.response);
      throw error;
    });
  };

  static updateArticle(article){
    return Axios.put(`/articles/${article.id}.json`, article, sessionHeaders())
    .then(response => {
      return response.data;
    }).catch(error => {
      Logger.log_error(error.response);
      throw error;
    });
  };

  static deleteArticle(article_id){
    return Axios.delete(`/articles/${article_id}.json`, sessionHeaders())
    .then(response => {
        return response.data;
    }).catch(error => {
      Logger.log_error(error.response);
      throw error;
    });
  };

}

export default ArticleApi;