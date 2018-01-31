import React from "react";
import ArticleRow from './ArticleRow';

const ArticleList = (props) => {
  let articlesUI = null;
  if(props.error){
    articlesUI = (<div className="row">
        <div className="col-sm-12">
          <h3 className="text-center text-danger">{props.error.toString()}</h3>
        </div>
      </div>)
  }else if(props.isLoading){
    articlesUI = (
      <div className="row">
        <div className="col-sm-12">
          <h3 className="text-center">Articles are loading please wait!</h3>
        </div>
      </div>
    )
  }else{
   articlesUI = (
    <div>
      <ul className="list-group">
        {
          props.articles.map(article => {
            return (
              <ArticleRow key={article.id} article={article} />
            )
          })
        }
      </ul>
    </div>
   )
  }
  return(
  <div>
     {articlesUI}
  </div>
  )
};

export default ArticleList;