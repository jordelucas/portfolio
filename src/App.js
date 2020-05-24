import React, { useState, useEffect } from 'react';

import Home from './pages/Home';
import Nav from './pages/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

function App() {
  const [pageCurrent, setPageCurrent] = useState('home')
  const [activeMenu, setActiveMenu] = useState(true)
  const [pages, setPages] = useState({
    home: true
  })

  function handleClickToggle(){
    setActiveMenu(!activeMenu)
  }

  useEffect(() => {
    setPages({home: !pages.home})
  },[activeMenu])

  return (
    <>
      <GlobalStyle />
      
      <div className="App">
        <Header 
          title={pageCurrent} 
          changePage={handleClickToggle}
        />
        <Nav active={activeMenu}/>
        <Home active={pages.home} />
        <Footer />
      </div>
    </>
  );
}

export default App;
