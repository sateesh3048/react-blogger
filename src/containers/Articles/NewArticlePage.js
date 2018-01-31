import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Redirect, Link} from "react-router-dom";
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
        <h3 className="text-center">New Article Form</h3>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" value={this.state.title}   onChange={this.onChangeData} />
          </div>
          <div className="form-group">
            <label>Content</label>
            <input type="text" name="content" className="form-control" value={this.state.content}   onChange={this.onChangeData} />
          </div>
          <div className="form-group">
            <div className="col-sm-offset-4 col-sm-2">
              <input type="submit" value="Create Article" onClick={this.onSubmit}  className="btn btn-success" />
            </div>
            <div className="col-sm-2">
              <Link to="/articles" className="btn btn-info">GoBack</Link>
            </div>
          </div>
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