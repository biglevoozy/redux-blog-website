import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Home from './components/Home/Home';

import './assets/styles/global.css';
import './assets/styles/reset.css';

import { store } from './redux/store/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Home />
  </Provider>,
);
