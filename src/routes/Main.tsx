import React, { Suspense, lazy } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';


// components
const HomePage = lazy(() => import('../pages/Home'));
const RocketView = lazy(() => import('../pages/Rocket'));
const ErrorPage = lazy(() => import('../components/SVGComponents/404'))


const Main = withRouter(({ location }) => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="main_container">
      <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route exact={true} path={'/rocket/:id'} component={RocketView} />  
      </Switch>
      </div>
      

      <Footer />
    </Suspense>
  );
});

export default Main;
