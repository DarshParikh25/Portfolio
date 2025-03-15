import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ChevronUp } from 'lucide-react'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const topButton = document.getElementById("top-button");
      if (document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <button
        onClick={scrollToTop}
        id="top-button"
        className="fixed bottom-5 right-5 hidden bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300"
        title="Go To Top"
      >
        <ChevronUp />
      </button>
    </>
  )
}

export default App 