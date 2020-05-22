import React from 'react';

import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      
      <div className="App">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
