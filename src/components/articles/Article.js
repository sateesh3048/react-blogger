import React from "react";

const Article = ({article}) => {
   return(
    <li key={article.id} className="list-group-item">
      {article.title}
    </li>
   )
}

export default Article;