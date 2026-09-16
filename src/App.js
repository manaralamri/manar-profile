import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
const HomePage = () => {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Experience />
    <Certifications/>
    <Contact />
    <Footer />

    </div>



  );
}
function App() {
  return (
    <Router> {/* Wrap Routes inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>

);
}


export default App;
