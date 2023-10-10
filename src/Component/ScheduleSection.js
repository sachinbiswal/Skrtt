import React from 'react';
import './ScheduleSection.css';

function ScheduleSection() {
  const eventCategories = [
    {
      name: 'Birthday Parties',
      description: 'Celebrate your special day on the high seas.',
      date: '2023-10-16',
      time: '10:00 AM - 11:30 AM',
      location: 'Main Hall',
    },
    {
      name: 'Bridal Showers',
      description: 'Host a memorable bridal shower on our cruise ship.',
      date: '2023-10-16',
      time: '1:00 PM - 2:30 PM',
      location: 'Room A',
    },
    {
      name: 'Wedding Anniversaries',
      description: 'Celebrate your love on our romantic cruise.',
      date: '2023-10-17',
      time: '9:30 AM - 11:00 AM',
      location: 'Main Hall',
    },
    {
      name: 'Corporate Events',
      description: 'Plan a corporate event with a view.',
      date: '2023-10-17',
      time: '2:00 PM - 4:00 PM',
      location: 'Room B',
    },
    {
      name: 'Baby Showers',
      description: 'Host a baby shower with a nautical theme.',
      date: '2023-10-18',
      time: '11:00 AM - 12:30 PM',
      location: 'Main Hall',
    },
    {
      name: 'Kitty Parties',
      description: 'Enjoy a kitty party with friends and family.',
      date: '2023-10-18',
      time: '3:30 PM - 5:00 PM',
      location: 'Room C',
    },
    {
      name: 'Seminars',
      description: 'Conduct seminars on our cruise ship.',
      date: '2023-10-19',
      time: '10:30 AM - 12:00 PM',
      location: 'Main Hall',
    },
    {
      name: 'Bachelorette Parties',
      description: 'Celebrate your last fling before the ring.',
      date: '2023-10-19',
      time: '2:30 PM - 4:00 PM',
      location: 'Room A',
    },
    {
      name: 'Gala Dinners',
      description: 'Elegant dinners with a view of the ocean.',
      date: '2023-10-20',
      time: '7:00 PM - 9:00 PM',
      location: 'Main Hall',
    },
    {
      name: 'Family Reunions',
      description: 'Reconnect with family on a memorable cruise.',
      date: '2023-10-20',
      time: '11:00 AM - 1:00 PM',
      location: 'Room B',
    },
    {
      name: 'Product Launches',
      description: 'Launch your products in style on our ship.',
      date: '2023-10-21',
      time: '3:00 PM - 5:00 PM',
      location: 'Main Hall',
    },
    {
      name: 'Cooking Classes',
      description: 'Learn to cook delicious meals while cruising.',
      date: '2023-10-21',
      time: '10:00 AM - 12:00 PM',
      location: 'Room C',
    },
    {
      name: 'Music Concerts',
      description: 'Enjoy live music performances on board.',
      date: '2023-10-22',
      time: '8:00 PM - 10:00 PM',
      location: 'Main Hall',
    },
    {
      name: 'Art Exhibitions',
      description: 'Admire beautiful artworks during the cruise.',
      date: '2023-10-22',
      time: '1:00 PM - 3:00 PM',
      location: 'Room A',
    },
    {
      name: 'Fitness Workshops',
      description: 'Stay fit with onboard fitness classes.',
      date: '2023-10-23',
      time: '9:00 AM - 10:30 AM',
      location: 'Main Hall',
    },
  ];

  return (<>
  
    <h2 className='secheduletitle'>Next Schedule</h2>
    <section className="schedule">
      {eventCategories.map((category, index) => (
        <div className="schedule-item" key={index}>
          <h3>{category.name}</h3>
          <p><b>Date:  </b>{category.date}</p>
          <p><b>Time:</b> {category.time}</p>
          <p><b>Location: </b> {category.location}</p>
        <div className='description'>
        <span style={{fontWeight:"700",color:"#666666"}}> Description:</span>
        <p>{category.description}</p>
        </div>
        </div>
      ))}
    </section>
  </>
  );
}

export default ScheduleSection;
