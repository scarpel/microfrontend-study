import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div className="app">
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
