import React, {Component} from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import ArticleForm from './ArticleForm';
import ShowError from '../../components/errors/ShowError';
import {bindActionCreators} from "redux";
import * as actions from '../../actions/articleActions';


class EditArticlePage extends Component {

  componentWillUnmount(){
    this.props.actions.clearArticleErrorMessage();
  }

  render(){
    let article_form = (
      <div>
        {this.props.article&&this.props.article.isUpdated ? <Redirect to="/articles" /> : null }
        <ShowError error = {this.props.article.error} />
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

const mapDispatchToProps = dispatch => {
  return {
     actions: bindActionCreators(actions, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);
