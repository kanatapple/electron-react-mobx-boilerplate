import React from 'react';
import ReactDOM from 'react-dom';
import * as mobx from 'mobx';
import { Provider } from 'mobx-react';

import App from './App';

mobx.useStrict(true);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

