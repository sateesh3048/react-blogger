import React,{Component} from "react";

class ArticleForm extends Component {
  state = {
    title: '',
    content: ''
  }

  onChage = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onsubmit = (e) => {
    e.preventDefault();
    const {title, content} = this.state;
    console.log("new Article state data");
    console.log(state);
  }

  render(){
    return(
      <form>
        <input type="text" name="title" value={title} onChage={this.onChange} />
        <input type="text" name="content" value={content} onChange={this.onChage} />
      </form>
    )
  }
}

export default ArticleForm;