import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { store, persistor } from './store/store';

import './styles/index.scss';

// @NOTE: Here wrap in prodicers (theme, i18n, helmet, etc)
const queryClient = new QueryClient();

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QueryClientProvider>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
