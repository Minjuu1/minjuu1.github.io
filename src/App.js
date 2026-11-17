import './App.css';
import { Profile, About } from './components/Hero';
import NewsSection from './components/NewsSection';
import ExpSection from './components/ExpSection';
import PubSection from './components/PubSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <aside className="sidebar">
          <Profile />
          <NewsSection />
        </aside>
        <main className="content">
          <About />
          <ProjectSection />
          <PubSection />
          <ExpSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
