import './App.css'


import{ Hero } from "./sections/hero/hero";
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/footer/Footer';



function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Footer/>
    </>
  );
}

export default App
