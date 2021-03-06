import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.scss';
import Title from './Title';
import Bar from './Bar';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>
);

// If you want to start measuring performance in your Title, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
