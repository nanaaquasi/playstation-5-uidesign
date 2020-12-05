import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { ExploreContent } from "../components/ExploreContent";
import GameDetailContent from "../pages/GameDetailContent";

const HomeContentNavigator = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path={`${path}/:id`} component={GameDetailContent} />
          <Route path={path} component={ExploreContent} exact />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default HomeContentNavigator;
