import './App.css';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ExpSection from './components/ExpSection';
import PubSection from './components/PubSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <Hero />
        <NewsSection />
        <PubSection />
        <ExpSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
