import React, {Component} from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import{bindActionCreators} from "redux";
import * as actions from '../../actions/articleActions';

class EditArticlePage extends Component {

  state = {
    id: '',
    title: '',
    content: ''
  }

  componentDidMount(){
    let article_id = this.props.match.params.id;
    this.props.actions.showArticle(article_id);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.article.current_article.id,
      title: nextProps.article.current_article.title,
      content: nextProps.article.current_article.content
    })
  }


  onChangeData = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const article = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
      user_id: 1
    };
    this.props.actions.updateArticle(article);
  } 

  updateState(article){
    if(article){
      this.setState({
        title: article.title,
        content: article.content
      })
    }
  }
  render(){
    let article_form = (
      <div>
        {this.props.article&&this.props.article.isUpdated ? <Redirect to="/articles" /> : null }
        <h3>Edit Article Form</h3>
        <form>
          Title<input type="text" name="title" value={this.state.title}   onChange={this.onChangeData} />
          Content<input type="text" name="content" value={this.state.content} onChange={this.onChangeData} />
          <input type="submit" value="Update Article" onClick={this.onSubmit}  />
        </form>
      </div>
    );
    return article_form;
  }
};

const mapStateToProps = state => {
  return {
    article: state.article,
    current_article: state.article.current_article
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage);