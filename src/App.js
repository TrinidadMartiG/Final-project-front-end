import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch, Link, Route, BrowserRouter } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import RegistrationForm from './views/RegistrationForm';
import Login from './views/Login';
import Form from './views/DataFormSend';
import ModifyForm from './views/DataFormModify';
import injectContext from "./store/appContext";

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <BrowserRouter>
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <Route path="/registrationform">
              <RegistrationForm />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dataformsend">
              <Form />
            </Route>
            <Route path="/dataform_modify">
              <ModifyForm />
            </Route>
          </Switch>
        </BrowserRouter>
      )} />
  );
}

export default injectContext(App);