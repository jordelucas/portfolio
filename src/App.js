import React from 'react';

import Home from './Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
