import React from 'react';
import './App.css';
import Header from './Component/Header';
import PhotoGallery from './Component/PhotoGallery';
import BookingFrom from './Component/BookingFrom';
import Footer from './Component/Footer';
import About from './Component/About';
import ScheduleSection from './Component/ScheduleSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <PhotoGallery />
      <BookingFrom />
      <ScheduleSection/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
