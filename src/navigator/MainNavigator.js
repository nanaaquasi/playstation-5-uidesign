import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import BootScreen from "../pages/BootScreen";
import HomeScreen from "../pages/HomeScreen";
import { InitScreen } from "../pages/InitScreen";
import StoreScreen from "../pages/StoreScreen";

export const MainNavigator = () => {
  const location = useLocation();
  return (
    <>
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
      <Route path='/' component={InitScreen} exact />

      <Switch location={location} key={location.pathname}>
        <Route path='/welcome' component={BootScreen} />
        <Route path='/home' component={HomeScreen} exact />
        <Route path='/store' component={StoreScreen} />
      </Switch>
      {/* </AnimatePresence> */}
    </>
  );
};
