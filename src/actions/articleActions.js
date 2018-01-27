import articleApi from '../api/articleApi';

export function loadArticles() {
  return (dispatch) => {
    return articleApi.getAllArticles().then(articles => {
      console.log("articles list from articleActions");
      console.log(articles);
      dispatch(loadArticlesSuccess(articles))
    })
    .catch(error => {          
        throw(error);
    })
  }
};

export function loadArticlesSuccess(articles){
  return { type: "LOAD_ARTICLES_SUCCESS", articles: articles}
}
