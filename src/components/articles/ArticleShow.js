import React from "react";
import { Link } from 'react-router-dom';
const ArticleShow = (props) => {
  let article = props.article;
  let articleUI = null;
  if(props.error){
    articleUI =(<section>
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="text-center text-danger">
                    {props.error.toString()}
                  </h3>
                </div>
              </div>
            </section>)
  }
  else if(props.isLoading){
    articleUI =(<section>
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="text-center">Please wait article is loading!</h3>
                </div>
              </div>
            </section>)
  }else{
    articleUI = (
      article? 
        (<section>
          <div className="row">
            <div className="col-sm-12">
              <h3 className="text-center">Welcome to Article</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">Title</div>
            <div className="col-sm-8">{article.title}</div>
          </div>
          <div className="row">
            <div className="col-sm-2">Content</div>
            <div className="col-sm-8">{article.content}</div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <Link to={`/articles/${article.id}/edit`} className="btn btn-primary" >Edit</Link>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-danger" onClick={() => props.deleteArticle(article.id)}>Destroy</button>
            </div>
          </div>
        </section>)
        :
        (
          <section>
            <div className="row">
              <div className="col-sm-12">
                <h3 className="text-center">Sorry article is not avilable</h3>
              </div>
            </div>
          </section>)
        )
  }
  return (
    <div>
    { articleUI } 
    </div>
  )
}

export default ArticleShow;