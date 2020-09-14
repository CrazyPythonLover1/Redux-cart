import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div style={{display: 'flex',justifyContent: 'space-around'}}>
      <Shop></Shop>
      <Cart ></Cart>
    </div>
  );
}

export default App;
