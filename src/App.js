import React from 'react';
import Button from 'antd/lib/button';
import Hero from './components/Hero';
import './App.css';
import Nav from './components/Header';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <header className="App-header">
      <h1>Slumber</h1>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
