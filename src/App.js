import React from 'react';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import BookingSteps from './components/BookingSteps';

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      {/* <BookingSteps /> */}
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;


