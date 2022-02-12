import React from 'react';
import { mount } from 'auth/AuthApp';
import DefaultApp from './DefaultApp';

export default (props) => {
  return <DefaultApp mount={mount} className="auth-app" initalPath="/auth/signin" {...props} />;
};
