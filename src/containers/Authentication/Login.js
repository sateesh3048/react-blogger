import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Redirect} from "react-router-dom";
import * as actions from '../../actions/authActions';
import {Form, FormGroup, Label, Input, Row, Col} from "reactstrap";

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChangeData = (e) => {
    const state = Object.assign({}, this.state);
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const auth_params = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.actions.authLogin(auth_params);
  }

  redirectUrl = () => {
    const default_url = {from: {pathname: '/articles'}};
    if(this.props.location.state){
       return this.props.location.state.from.pathname !== "/logout" ? this.props.location.state : default_url
    }else{
      return default_url;
    }
  }

  render(){
    const {from} = this.redirectUrl();
    return(
      <span>
        {
          this.props.auth.isLoggedIn 
          ?
            <Redirect to={from} />
          :
            <Form>
              <FormGroup>
                <Label  for="Email" >Email</Label>
                <Input name="email" 
                  value = {this.state.email}
                  onChange = {this.onChangeData}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password" >Password</Label>
                <Input name="password"
                  value = {this.state.password}
                  onChange = {this.onChangeData}
                />
              </FormGroup>
              <Row>
                <Col xs={{size: 4}} >
                  <Input type="submit"
                    value = "Login"
                    onClick = {this.onSubmit}
                    className = "btn btn-success"
                  />
                </Col>
              </Row>
            </Form>
        }
      </span>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);