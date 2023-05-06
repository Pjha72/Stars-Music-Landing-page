import React from 'react'
import Download from './components/Download';
import Experince from './components/Experince';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setLoading(false);
    },3000)
  }
  return (
    !loading && (
      <div className='App text-white overflow-hidden'>
      <Header/>
      <Hero/>
      <Experince/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
    )
  );
}

export default App;
