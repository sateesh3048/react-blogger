import React from "react";
import Article from './Article';

const ArticleList = ({articles}) => {
  return(
    <ul className="list-group">
      {
        articles.map(article => {
          return (
            <Article key={article.id} article={article} />
          )
        })
      }
    </ul>
  )
};

export default ArticleList;