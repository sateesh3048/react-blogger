import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import ArticleForm from './ArticleForm';
import {bindActionCreators} from "redux";
import * as actions from '../../actions/articleActions';
import ShowError from '../../components/errors/ShowError';

class NewArticlePage extends Component {
  componentWillUnmount(){
    this.props.actions.clearArticleErrorMessage();
  }

  render(){
    let article_form = (
      <div>
        {this.props.article.isCreated ? <Redirect to="/articles" /> : null }
        <ShowError error = {this.props.article.error} />
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

const mapDispatchToProps = dispatch => {
  return {
     actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticlePage);