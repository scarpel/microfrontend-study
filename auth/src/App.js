import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Route, Router, Switch } from 'react-router-dom';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signup" component={SignUp} />
            <Route path="/" component={SignIn} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
