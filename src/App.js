import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Enjoy from './Components/Enjoy/Enjoy';
import Download from './Components/Download/Download';
import Watcheverywhere from './Components/Watcheverywhere.js/Watcheverywhere';
import FAQ from './Components/FAQ/FAQ';
import Kidsprofile from './Components/Kidsprofile/Kidsprofile';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      <Watcheverywhere />
      <Kidsprofile />
      <FAQ />
      <Footer />
      </div>
  )
}

export default App;