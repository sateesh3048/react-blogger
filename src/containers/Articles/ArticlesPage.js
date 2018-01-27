import React, { Component } from "react";
import ArticleList from '../../components/articles/ArticleList';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import *  as actions from '../../actions/articleActions';

class ArticlesPage extends Component {
  
  state = {
    articles: []
  }

  componentDidMount(){
    console.log("I am from Articles Landing page");
    console.log(this.props.actions);
    this.props.actions.loadArticles();
  }

  render(){
    return (
      <div className="row">
        <h3>Articles List</h3>
        <div className="col-md-12">
          <ArticleList articles={this.props.articles} />
        </div>
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      articles: state.articles
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);