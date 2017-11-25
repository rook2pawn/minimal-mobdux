import React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createStores } from './stores';
import CounterList from './counter-list';
import ReactDOM from 'react-dom';

// enable mobx strict mode. State mutation can only happen in actions
useStrict(true);
const stores = createStores();


const App = () => (
  <Provider {...stores}>
    <CounterList />
  </Provider>
);

export default App;
