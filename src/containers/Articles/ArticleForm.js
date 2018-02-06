import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import * as actions from '../../actions/articleActions';
import {Form, FormGroup, Label, Input, FormFeedback, Row, Col} from "reactstrap";

class ArticleForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title: '',
      content: '',
      errors: {},
      isValidForm: true
    }
  }

  componentDidMount(){
    if(this.props.formType === "Edit"){
      let article_id = this.props.articleId;
      this.props.actions.showArticle(article_id);
    }
  }

  componentWillReceiveProps(nextProps){
   if((nextProps.article.current_article) && (nextProps.article.current_article.id !== this.state.id)){
      this.setState({
        id: nextProps.article.current_article.id,
        title: nextProps.article.current_article.title,
        content: nextProps.article.current_article.content
      })
    }
  }


  onChangeData = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    //this.validateForm();
  }

  validateForm = () => {
    let errors = {};
    let isValidForm = true;
    if(this.state.title === '') {
      errors.title = "Title can't be empty"; 
      isValidForm = false;
    }
    if(this.state.content === '') {
      errors.content = "Content can't be empty";
      isValidForm = false;
    }
    this.setState({errors: errors, isValidForm: isValidForm});
  }

  
  onSubmit = (e) => {
    e.preventDefault();
    //this.validateForm();
    if(this.state.isValidForm){
      const article = {
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        user_id: 1
      }

      if(this.props.formType === "Create")
        this.props.actions.createArticle(article);
      else
        this.props.actions.updateArticle(article);
    }
  }  
  
  render(){
    let article_form = (
        <Form>
          <FormGroup>
            <Label for="Title">Title</Label>
            <Input name="title" 
              value={this.state.title}   
              onChange={this.onChangeData} 
              valid={!this.state.errors.title}
            />
            <FormFeedback>{this.state.errors.title}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="Content">Content</Label>
            <Input name="content"
              value={this.state.content}   
              onChange={this.onChangeData} 
              valid={!this.state.errors.content}
            />
            <FormFeedback>{this.state.errors.content}</FormFeedback>
          </FormGroup>
          <Row>
            <Col xs={{size: 4}} sm={{size: 2, offset: 2}} lg={{size: 2, offset: 4}}>
              <Input type="submit"
                value="Save"
                onClick={this.onSubmit}  
                className="btn btn-success"
              />
            </Col>
            <Col xs={{size: 2}}>
              <Link to="/articles" 
                className="btn btn-info">
                Back
              </Link>
            </Col>
          </Row>
        </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);