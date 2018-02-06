import React from "react";
import { Link } from 'react-router-dom';
import {Row, Col} from "reactstrap";
import ShowError from '../errors/ShowError';
import Aux from '../utility/Aux';

const ArticleShow = (props) => {
  let article = props.article;
  let articleUI = null;
  if(props.error){
    articleUI =(<section>
              <Row>
                <Col xs="12">
                  <ShowError error = {props.error} />
                </Col>
              </Row>
            </section>)
  }
  else if(props.isLoading){
    articleUI =(<section>
              <Row>
                <Col xs="12">
                  <h3 className="text-center">Please wait article is loading!</h3>
                </Col>
              </Row>
            </section>)
  }else{
    articleUI = (
      article? 
        (<section>
          <Row>
            <Col xs="12">
              <h3 className="text-center">Welcome to Article</h3>
            </Col>
          </Row>
          <Row>
            <Col xs="2">Title:</Col>
            <Col xs="8">{article.title}</Col>
          </Row>
          <Row>
            <Col xs="2">Content:</Col>
            <Col xs="8">{article.content}</Col>
          </Row>
          <Row>
            {props.isAuthenticated===true &&
            <Aux>
              <Col xs={{size: 2, offset: 2}} md={{size: 2}}>
                <Link to={`/articles/${article.id}/edit`} className="btn btn-primary" >Edit</Link>
              </Col>
              <Col xs="2" md="2">
                <button className="btn btn-danger" onClick={() => props.deleteArticle(article.id)}>Destroy</button>
              </Col>
            </Aux>
            }
            <Col xs="2" md="2">
              <Link to='/articles' className="btn btn-info">Back</Link>
            </Col>
          </Row>
        </section>)
        :
        (
          <section>
            <Row>
              <Col xs="12">
                <h3 className="text-center">Sorry article is not avilable</h3>
              </Col>
            </Row>
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