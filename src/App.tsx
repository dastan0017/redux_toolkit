import React from 'react';
import { Counter } from './features/counter/Counter';
import { Outlet } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main className='App-main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
