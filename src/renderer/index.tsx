/* eslint-disable import/order */
import { createRoot } from 'react-dom/client';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/app/store';
import Main from './Main';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
