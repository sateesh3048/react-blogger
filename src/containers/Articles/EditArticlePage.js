import React, {Component} from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import ArticleForm from './ArticleForm';

class EditArticlePage extends Component {
  render(){
    let article_form = (
      <div>
        {this.props.article&&this.props.article.isUpdated ? <Redirect to="/articles" /> : null }
        <h3>Edit Article Form</h3>
        <ArticleForm 
          formType="Edit"
          articleId = {this.props.match.params.id}
        />
      </div>
    );
    return article_form;
  }
};

const mapStateToProps = state => {
  return {
    article: state.article 
  }
};

export default connect(mapStateToProps, null)(EditArticlePage);
