import React from "react";

const Article = (props) => {
    
    return (
      <li key={props.article.key}>
        {props.article.title}
      </li>
    )
}

export default Article;