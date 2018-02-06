import * as types from '../actions/actionTypes';
import {updateObject} from './utility';

const initialState = {
  articles: [],
  current_article: null,
  isCreated: false,
  isUpdated: false,
  isDeleted: false,
  isLoading: false,
  error: null
}


const articleReducer = (state = initialState, action) => {
  switch(action.type){
    case types.LOAD_ARTICLES_INIT:
      return updateObject(state, {isLoading: action.isLoading, isCreated: false, isDeleted: false, isUpdated: false});
    case types.LOAD_ARTICLES_SUCCESS:
      return updateObject(state, {articles: action.articles, isLoading: action.isLoading});
    case types.LOAD_ARTICLES_FAIL:
      return updateObject(state, {error: action.error, isLoading: action.isLoading});
    case types.CREATE_ARTICLE_SUCCESS:
      return updateObject(state, {articles: state.articles.concat(action.article), isCreated: action.isCreated});
    case types.CREATE_ARTICLE_FAIL:
      return updateObject(state, {error: action.error}) 
    case types.SHOW_ARTICLE_INIT:
      return updateObject(state, {isLoading: action.isLoading });
    case types.SHOW_ARTICLE_SUCCESS:
      return updateObject(state, {current_article: action.article, isLoading: action.isLoading});
    case types.SHOW_ARTICLE_FAIL:
      return updateObject(state, {current_article: null, isLoading: action.isLoading, error: action.error});
    case types.UPDATE_ARTICLE_SUCCESS: 
      let articles = state.articles.map(article => {
        if(article.id !== action.article.id)
          return article;
        return {
          ...article,
          ...action.article
        }
      })
      return updateObject(state, {articles: articles, isUpdated: action.isUpdated});
    case types.UPDATE_ARTICLE_FAIL:
      return updateObject(state, {error: action.error}) 
    case types.DELETE_ARTICLE_SUCCESS:
      articles = state.articles.filter(article => article.id !== action.article_id);
      return updateObject(state, {articles: articles, isDeleted: action.isDeleted});
    case types.DELETE_ARTICLE_FAIL:
      return updateObject(state, {error: action.error}) 
    case types.CLEAR_ARTICLE_ERROR_MSG:
      return updateObject(state, {error: action.error}); 
    default:
      return state;
  }
}

export default articleReducer;