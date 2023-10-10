import React from 'react';
import './photo.css';

import image1 from '../assets/Image1.jpg';
import image2 from '../assets/Image2.jpg';
import image3 from '../assets/Image3.jpg';
import image4 from '../assets/Image4.jpg';
import image5 from '../assets/Image5.jpg';
import image6 from '../assets/Image6.jpg';
import EventSection from './EventSection';

function PhotoGallery() {
  return (
    <div className='container'>
      <div className='photogallery'>
     <div className='galleyheader'> 
      <h1>Gallery</h1>
      <h1>Events</h1>
      </div>

      <div className='imagediv'>
      <div className='photo-slider'>
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
          <img src={image5} alt="Image 5" />
          <img src={image6} alt="Image 6" />
      
      </div>
      <div className='event-section'>
        <EventSection />
      </div>
      </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
