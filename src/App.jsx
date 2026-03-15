import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <main className='bg-slate-300/20'>
      <Router>
        <Navbar></Navbar>
      </Router>
      
      </main>
    </div>
  )
}

export default App
