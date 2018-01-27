import * as types from '../actions/actionTypes';
import initialState from './initialState';

const articleReducer = (state = initialState.articles, action) => {
  switch(action.type){
    case types.LOAD_ARTICLES_SUCCESS:
      console.log("articles from articleReducer");
      console.log(action.articles);
      return Object.assign([], state, action.articles);
    default:
      return state;
  }
}

export default articleReducer;