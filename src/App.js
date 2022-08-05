import './App.css';
import React from 'react';
import AppBar from "./parts/AppBar"
import PortfolioGrid from "./portfolioComponents/PortfolioGrid";



function App() {
  return (
    <div className='App-background'>
     <AppBar/>
     <PortfolioGrid/>
     
    </div>
  );
}

export default App;
