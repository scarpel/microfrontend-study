import React, { lazy, Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const history = useHistory();

  // Effects
  useEffect(() => {
    if (isSignIn) {
      history.push('/dashboard');
    }
  }, [isSignIn]);

  // Render
  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className="app">
        <Header signedIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignIn(true)} />
            </Route>
            <Route path="/dashboard">{isSignIn ? <DashboardApp /> : <Redirect to="/" />}</Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </div>
    </StylesProvider>
  );
}
