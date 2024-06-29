
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Experience from './Components/Experience/Experience';
import Home from './Pages/Home/Home';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


function App() {
  useEffect(() => {
    Aos.init();
    
   }, [])
   
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
