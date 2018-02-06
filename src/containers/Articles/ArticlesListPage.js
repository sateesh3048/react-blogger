import React, { Component } from "react";
import ArticleList from '../../components/articles/ArticleList';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import *  as actions from '../../actions/articleActions';
import {Link} from "react-router-dom";


class ArticlesListPage extends Component {
  
  componentDidMount(){
    this.props.actions.loadArticles();
  }

  render(){
    return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <h3 className="text-center">List of Articles</h3>
        </div>
        {this.props.auth.isLoggedIn===true &&
          <div className="col-sm-4">
            <Link to="/articles/new" className="btn btn-primary">New Article</Link>
          </div>
        }
      </div>
      <div className="row">
        <div className="col-md-12">
          <ArticleList 
            articles={this.props.article.articles}
            isLoading = {this.props.article.isLoading} 
            error = {this.props.article.error}
            />
        </div>
      </div>
    </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      article: state.article,
      auth: state.auth
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListPage);