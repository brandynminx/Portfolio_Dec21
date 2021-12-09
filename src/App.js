//import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
      </header>
    </div>
  );
}

export default App;
