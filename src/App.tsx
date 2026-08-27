import './App.css';
import { Hero } from './sections/hero/hero';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/footer/Footer';
import { Projects } from './sections/projects/projects';
import { Curriculum } from './sections/curriculum/curriculum';

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <Hero />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Curriculum />
      </main>

      <Footer />
    </div>
  );
}

export default App;
