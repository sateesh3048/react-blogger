import React, { Component } from 'react';
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Layout from '../src/containers/Layout/Layout';
import * as actions from '../src/actions/authActions';
import {bindActionCreators} from "redux";

class App extends Component {
  componentWillMount(){
    this.props.actions.onAuthVerifyLogin();
  }

  render() {
    return (      
      <Layout />
    );
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
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App);
