import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ArticlesListPage from '../src/containers/Articles/ArticlesListPage';
import ArticleShowPage from '../src/containers/Articles/ArticleShowPage';
import NewArticlePage from '../src/containers/Articles/NewArticlePage';
import EditArticlePage from '../src/containers/Articles/EditArticlePage';
import Support from '../src/components/Support/Support';

const RoutesList = () => (
    <Switch>
       <Route path="/articles" exact component={ArticlesListPage} />
       <Route path="/articles/new" exact component={NewArticlePage} />
       <Route path="/articles/:id/edit" exact component={EditArticlePage} />
       <Route path="/articles/:id" exact component={ArticleShowPage} />
       <Route path="/support" exact component={Support} />
       <Redirect exact from="/" to ="/articles" />
    </Switch>
);

export default RoutesList;

