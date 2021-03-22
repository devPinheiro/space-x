import * as React from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import './App.scss';

import AppRoutes from './routes/Main';

function App() {
  return (
    <div className='App'>
      <Router>
        <Provider store={store}> 
        <ToastProvider autoDismiss={3000}>
          <AppRoutes />
          </ToastProvider>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
