import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import { taskStore } from './components/Redux/taskStore';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={taskStore}>
      <Application/>
    </Provider>,
  );