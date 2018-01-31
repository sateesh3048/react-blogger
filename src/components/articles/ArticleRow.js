import React from "react";
import { Link } from "react-router-dom";

const Article = ({article}) => {
   return(
    <li key={article.id} className="list-group-item">
      <Link to={`/articles/${article.id}`}> {article.title} </Link>
    </li>
   )
}

export default Article;