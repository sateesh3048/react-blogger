import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as actions from '../../actions/authActions';

class Logout extends Component {
  componentDidMount(){
    this.props.actions.authLogout();
  }

  render(){
    return(
      <span>
      {
        this.props.auth.isLoggedIn
        ?
          <h1>
            Logging out...
          </h1>
        :
         <Redirect to="/articles" />
      }
      </span>
    )
  }
}

const maptStateToProps = state => {
  return {
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(maptStateToProps, mapDispatchToProps)(Logout);