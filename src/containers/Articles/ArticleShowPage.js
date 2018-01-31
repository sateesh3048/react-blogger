import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { Redirect } from "react-router-dom";
import * as actions from '../../actions/articleActions';
import ArticleShow from '../../components/articles/ArticleShow';

class ArticleShowPage extends Component {
  state = {
    article: null
  }

  componentDidMount(){
    const article_id = this.props.match.params.id;
    console.log("given article id from componentDidMount");
    console.log(article_id);
    this.props.actions.showArticle(article_id);
  }
  
  render(){
    console.log("article data from loading");
    console.log(this.props.article);
    return(
      <div>
        {this.props.article.isDeleted ? <Redirect to="/articles" /> : null}
        <ArticleShow 
          article={this.props.article.current_article}
          deleteArticle={this.props.actions.deleteArticle}
          isLoading={this.props.article.isLoading}
          error = {this.props.article.error}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
     article: state.article
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions:  bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShowPage);