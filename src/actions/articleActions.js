import articleApi from '../api/articleApi';
import * as actionTypes from '../actions/actionTypes';

export function loadArticles() {
  return (dispatch) => {
    dispatch(loadArticlesInit());
    return articleApi.getAllArticles().then(articles => {
      dispatch(loadArticlesSuccess(articles))
    })
    .catch(error => {          
       dispatch(loadArticlesFail(error));
    });
  };
};

export function showArticle(id){
  return (dispatch) => {
    dispatch(showArticleInit())    
    return articleApi.getArticle(id).then(article => {
      dispatch(showArticleSuccess(article));
    })
    .catch(error => {
      dispatch(showArticleFail(id, error.response.data.message));
    });
  };
};

export function createArticle(article){
  return (dispatch) => {
    return articleApi.createArticle(article).then(created_article => {
      dispatch(createArticleSuccess(created_article));
    })
    .catch(error => {
      dispatch(createArticleFail(error.response.data.message));
    });
  }
}

export function updateArticle(article){
  return (dispatch) => {
    return articleApi.updateArticle(article).then(updated_article => {
      dispatch(updatedArticleSuccess(updated_article));
    }).catch(error => {
      dispatch(updateArticleFail(error.response.data.message));
    });
  }
};

export function deleteArticle(article_id){
  return (dispatch) => {
    return articleApi.deleteArticle(article_id).then(response => {
      dispatch(deleteArticleSuccess(article_id));
    }).catch(error => {
      dispatch(deleteArticleFail(error.response.data.message));
    })
  }
};

export function clearArticleErrorMessage(){
  return (dispatch) => {
    dispatch(removeArticleErrMsg());
  }
}

export function loadArticlesInit(){
  return { type: actionTypes.LOAD_ARTICLES_INIT, isLoading: true}
}

export function loadArticlesSuccess(articles){
  return { type: actionTypes.LOAD_ARTICLES_SUCCESS, articles: articles, isLoading: false}
}

export function loadArticlesFail(error){
  return { type: actionTypes.LOAD_ARTICLES_FAIL, isLoading: false, error: error}
}

export function showArticleInit(){
  return { type: actionTypes.SHOW_ARTICLE_INIT, isLoading: true}
}

export function showArticleSuccess(article){
  return { type: actionTypes.SHOW_ARTICLE_SUCCESS, article: article, isLoading: false}
}

export function showArticleFail(article_id, error){
  return { type: actionTypes.SHOW_ARTICLE_FAIL, article_id: article_id, isLoading: false, error: error}
}

export function createArticleSuccess(article){
  return {type: actionTypes.CREATE_ARTICLE_SUCCESS, article: article, isCreated: true}
}

export function createArticleFail(error){
  return {type: actionTypes.CREATE_ARTICLE_FAIL, error: error}
}

export function updatedArticleSuccess(article){
  return {type: actionTypes.UPDATE_ARTICLE_SUCCESS, article: article, isUpdated: true}
}

export function updateArticleFail(error){
  return {type: actionTypes.UPDATE_ARTICLE_FAIL, isLoading: false, error: error }
}

export function deleteArticleSuccess(article_id){
  return { type: actionTypes.DELETE_ARTICLE_SUCCESS, article_id: article_id, isDeleted: true}
}

export function deleteArticleFail(error){
  return {type: actionTypes.DELETE_ARTICLE_FAIL , isLoading: false, error: error }
}

export function removeArticleErrMsg(){
  return {type: actionTypes.CLEAR_ARTICLE_ERROR_MSG, error: null}
}