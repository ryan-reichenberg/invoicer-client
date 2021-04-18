import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import isDev from './utils/environmentUtils';

function render() {
  ReactDOM.render(
    
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

if (isDev() && module.hot) {
  module.hot.accept('./app/App', render)
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
