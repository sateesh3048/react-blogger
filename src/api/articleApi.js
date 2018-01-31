import Axios from "../lib/Axios";
class ArticleApi {
  static getAllArticles(){
    return Axios.get("/articles.json")
    .then((response) => {
      return response.data;  
    }).catch(error => {
      throw error;
    });
  }

  static getArticle(id){
    return Axios.get(`/articles/${id}.json`)
      .then(response => {
        return response.data;
      }).catch(error => {
        throw error;
      })
  }

  static createArticle(article){
    return Axios.post('/articles.json', article)
    .then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    })
  }

  static updateArticle(article){
    return Axios.put(`/articles/${article.id}.json`, article)
    .then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }

  static deleteArticle(article_id){
    return Axios.delete(`/articles/${article_id}.json`)
      .then(response => {
         return response.data;
      }).catch(error => {
        throw error;
      })
  }

}

export default ArticleApi;