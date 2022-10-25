
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';

import { ContextProvider } from './context';
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ContextProvider>
        <Shop></Shop>
      </ContextProvider>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
