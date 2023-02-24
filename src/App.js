
import Download from './components/Download';
import Experince from './components/Experince';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';

function App() {
  return (
    
    <div className='App text-white overflow-hidden'>
      <Header/>
      <Hero/>
      <Experince/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
