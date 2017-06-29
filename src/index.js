import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import Dashboard from './components/dashboard';
ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
