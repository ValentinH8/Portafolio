import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Skills from './views/Skills/Skills';
import Projects from './views/Project/Project';
import Contact from './views/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;