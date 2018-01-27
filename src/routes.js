import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticlesPage from '../src/containers/Articles/ArticlesPage';
import Support from '../src/components/Support/Support';

const RoutesList = () => (
    <Switch>
       <Route path="/articles" exact component={ArticlesPage} />
       <Route path="/support" exact component={Support} />
       <Redirect exact from="/" to ="/articles" />
    </Switch>
);

export default RoutesList;

