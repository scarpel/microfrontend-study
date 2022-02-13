import React from 'react';
import DefaultApp from './DefaultApp';

import { mount } from 'dashboard/DashboardApp';

export default (props) => <DefaultApp className="dashboard-app" mount={mount} {...props} />;
