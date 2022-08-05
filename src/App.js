import './App.css';
import React from 'react';
import AppBar from "./portfolioComponents/AppBar";
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
