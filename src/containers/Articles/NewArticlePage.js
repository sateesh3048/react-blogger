import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Redirect} from "react-router-dom";
import * as actions from '../../actions/articleActions';

class NewArticlePage extends Component {
  
  state = {
    title: '',
    content: ''
  }

  onChangeData = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const article = {
      title: this.state.title,
      content: this.state.content,
      user_id: 1
    }
    this.props.actions.createArticle(article);
  }  
  
  render(){
    let article_form = (
      <div>
        {this.props.article.isCreated ? <Redirect to="/articles" /> : null }
        <h3>New Article Form</h3>
        <form>
          Title<input type="text" name="title" value={this.state.title}   onChange={this.onChangeData} />
          Content<input type="text" name="content" value={this.state.content} onChange={this.onChangeData} />
          <input type="submit" value="Create Article" onClick={this.onSubmit}  />
        </form>
      </div>
    );
    return article_form;
  }
};

const mapStateToProps = state => {
  console.log("state details from create action");
  console.log(state.article);
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