import React, { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { Route, Switch, useHistory } from 'react-router-dom';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const history = useHistory();

  const onSignIn = () => {
    console.log('teste');
    setIsSignIn(true);
    history.push('/');
  };

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div className="app">
        <Header signedIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={onSignIn} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </div>
    </StylesProvider>
  );
}
