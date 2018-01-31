import articleApi from '../api/articleApi';

export function loadArticles() {
  return (dispatch) => {
    dispatch(loadArticlesInit());
    return articleApi.getAllArticles().then(articles => {
      dispatch(loadArticlesSuccess(articles))
    })
    .catch(error => {          
       dispatch(loadArticlesFail(error));
    })
  }
};

export function showArticle(id){
  return (dispatch) => {
    console.log("I am inside show Article call");
    
    dispatch(showArticleInit())    
    return articleApi.getArticle(id).then(article => {
      dispatch(showArticleSuccess(article));
    })
    .catch(error => {
      console.log("I am from article actions >> showArticle");
      console.log(error);
      dispatch(showArticleFail(id, error));
      //throw(error);
    })
  }
}

export function createArticle(article){
  return (dispatch) => {
    return articleApi.createArticle(article).then(created_article => {
      
      dispatch(createArticleSuccess(created_article));
    })
    .catch(error => {
      console.log("I am from article actions ");
      console.log(error);
      throw(error);
    });
  }
}

export function updateArticle(article){
  return (dispatch) => {
    return articleApi.updateArticle(article).then(updated_article => {
      dispatch(updatedArticleSuccess(updated_article));
    }).catch(error => {
      throw(error);
    });
  }
}

export function deleteArticle(article_id){
  return (dispatch) => {
    return articleApi.deleteArticle(article_id).then(response => {
      dispatch(deleteArticleSuccess(article_id));
    }).catch(error => {
      throw error;
    })
  }
}

export function loadArticlesInit(){
  return { type: "LOAD_ARTICLES_INIT", isLoading: true}
}

export function loadArticlesSuccess(articles){
  return { type: "LOAD_ARTICLES_SUCCESS", articles: articles, isLoading: false}
}

export function loadArticlesFail(error){
  return { type: "LOAD_ARTICLES_FAIL", isLoading: false, error: error}
}

export function showArticleInit(){
  return { type: "SHOW_ARTICLE_INIT", isLoading: true}
}

export function showArticleSuccess(article){
  return { type: "SHOW_ARTICLE_SUCCESS", article: article, isLoading: false}
}

export function showArticleFail(article_id, error){
  return { type: "SHOW_ARTICLE_FAIL", article_id: article_id, isLoading: false, error: error}
}

export function createArticleSuccess(article){
  return {type: "CREATE_ARTICLE_SUCCESS", article: article, isCreated: true}
}

export function updatedArticleSuccess(article){
  return {type: "UPDATE_ARTICLE_SUCCESS", article: article, isUpdated: true}
}

export function deleteArticleSuccess(article_id){
  return { type: "DELETE_ARTICLE_SUCCESS", article_id: article_id, isDeleted: true}
}