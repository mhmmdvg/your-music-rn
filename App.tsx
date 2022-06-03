import React from 'react';
import {ContextProvider} from './src/context/context';
import Routes from './src/Routes';

const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};

export default App;
