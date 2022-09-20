import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoLayer } from './contex/TodoContext';
import reducer, {initialState} from './contex/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <TodoLayer initialState={initialState} reducer={reducer}>
    <App />
  </TodoLayer>
  </React.StrictMode>
);

