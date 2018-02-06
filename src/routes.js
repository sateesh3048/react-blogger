import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticlesListPage from '../src/containers/Articles/ArticlesListPage';
import ArticleShowPage from '../src/containers/Articles/ArticleShowPage';
import NewArticlePage from '../src/containers/Articles/NewArticlePage';
import EditArticlePage from '../src/containers/Articles/EditArticlePage';
import Support from '../src/components/Support/Support';
import Login from '../src/containers/Authentication/Login';
import Logout from '../src/containers/Authentication/Logout';
import PrivateRoute from '../src/components/routes/PrivateRoute';
import {connect} from "react-redux";

const RoutesList = (props) => {
  return(
      
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/articles" exact component={ArticlesListPage} />
        <PrivateRoute 
          path="/articles/new" exact 
          component={NewArticlePage} 
          isAuthenticated = {props.auth.isLoggedIn}
        />
        <PrivateRoute
          path="/articles/:id/edit" exact
          component={EditArticlePage} 
          isAuthenticated = {props.auth.isLoggedIn}
        />  
        <Route path="/articles/:id" exact component={ArticleShowPage} />
        <Route path="/support" exact component={Support} />
        <Redirect exact from="/" to="/articles" />
        <PrivateRoute
          path="/logout" exact
          component={Logout} 
          isAuthenticated = {props.auth.isLoggedIn}
        />  
      </Switch>
    )
  }
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(RoutesList);

