require.context('../public/', true);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'babel-core/register';
import 'babel-polyfill';

import { Chat } from './components/Chat';

ReactDOM.render(<Chat />, document.getElementById('app-root'));
