require.context('../public/', true);

// Enables ES7 features such as async/await in *.js/*.jsx code
import 'babel-core/register';
import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css';

import {App} from './Components/App';

Modal.setAppElement('#app-root');

ReactDOM.render(<App/>, document.getElementById('app-root'));
