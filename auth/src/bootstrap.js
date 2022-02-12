import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory, createMemoryHistory } from 'history';

import App from './App';
// import AuthProvider from './context/AuthContext';

const mount = (el, { onNavigate, defaultHistory, initialPath = '/', onSignIn = () => {} }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    // <AuthProvider onSignIn={onSignIn}>
    <App history={history} />,
    // </AuthProvider>,
    el
  );

  return {
    onParentNavigate: ({ pathname: parentPath }) => {
      if (history.location.pathname !== parentPath) {
        history.push(parentPath);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_auth-dev-root');

  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
