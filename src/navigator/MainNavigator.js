import React from "react";
import { Route, Switch } from "react-router-dom";
import BootScreen from "../pages/BootScreen";
import HomeScreen from "../pages/HomeScreen";
import { InitScreen } from "../pages/InitScreen";

export const MainNavigator = () => {
  return (
    <Switch>
      <Route path='/welcome' component={BootScreen} />
      <Route path='/home' component={HomeScreen} />
      <Route path='/' component={InitScreen} />
    </Switch>
  );
};
