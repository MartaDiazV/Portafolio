import './App.css'


import{ Hero } from "./sections/hero/hero";
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/footer/Footer';
import { Projects } from './sections/projects/projects';
import { Curriculum } from './sections/curriculum/curriculum';



function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Projects/>
     <div className="section-divider" aria-hidden="true" />
     <Curriculum/>
     <Footer/>
    </>
  );
}

export default App
