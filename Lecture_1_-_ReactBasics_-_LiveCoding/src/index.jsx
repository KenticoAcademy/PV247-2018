require.context('../public/', true);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'babel-core/register';
import 'babel-polyfill';

import { MyComponent } from './components/MyComponent';

ReactDOM.render(<MyComponent />, document.getElementById('app-root'));
