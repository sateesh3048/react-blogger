import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import ArticleForm from './ArticleForm';

class NewArticlePage extends Component {
  render(){
    let article_form = (
      <div>
        {this.props.article.isCreated ? <Redirect to="/articles" /> : null }
        <h3 className="text-center">New Article Form</h3>
        <ArticleForm 
          formType="Create"
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

export default connect(mapStateToProps, null)(NewArticlePage);