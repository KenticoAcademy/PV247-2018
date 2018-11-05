import { RichTextEditor } from "./RichTextEditor";

require.context('../public/', true);

// Enables ES7 features such as async/await in *.js/*.jsx code
import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <main style={{
      maxWidth: '960px',
      margin: '0 auto',
    }}
    >
      <h1>Hello Rich Text</h1>
      <RichTextEditor />
    </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('app-root'));
