import { mount } from 'auth/AuthApp';

import React from 'react';
import DefaultApp from './DefaultApp';

export default (props) => <DefaultApp mount={mount} className="auth-app" {...props} />;
