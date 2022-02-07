import { mount } from 'marketing/MarketingApp';

import React from 'react';
import DefaultApp from './DefaultApp';

export default (props) => <DefaultApp mount={mount} className="marketing-app" {...props} />;
