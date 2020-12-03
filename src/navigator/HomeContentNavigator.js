import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { ExploreContent } from "../components/ExploreContent";
import GameDetailContent from "../pages/GameDetailContent";

const HomeContentNavigator = () => {
  const { url } = useRouteMatch();
  const location = useLocation();
  return (
    <>
      <Route path={url} component={ExploreContent} exact />
      <Switch location={location}>
        <Route path={`${url}/game/:id`} component={GameDetailContent} exact />
      </Switch>
    </>
  );
};

export default HomeContentNavigator;
