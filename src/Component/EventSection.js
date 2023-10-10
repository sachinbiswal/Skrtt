import React, { useState, useEffect } from 'react';
import './photo.css';
import ReactModal from 'react-modal';
import BookingForm from './BookingFrom';

function EventSection() {

  
  const eventCategories = [
    {
      name: 'Birthday Parties',
      description: 'Celebrate your special day on the high seas.',
      link: '/birthday-party-info',
      image: 'https://cdn.firstcry.com/education/2022/12/29111202/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg',
      price: '$300 per person',
      totalTickets: 50,
      additionalInfo: 'A birthday celebration is occasion for joy, laughter, and connection, and the perfect birthday party invitation kicks all of this off in style. Whether it’s a milestone birthday, a themed or surprise party, or a simple, intimate gathering, crafting the right birthday invitation wording is essential to make your guests feel excited and eager to attend. Read on for the best tips, ideas, and examples to help you create impactful invitations, whether fun or formal, and be sure to explore our wonderful assortment of birthday invitations online. And don’t miss our personalized party supplies, either, from festive bunting banners to hit-of-the-party selfie frames. ',
    },
    {
      name: 'Bridal Showers',
      description: 'Host a memorable bridal shower on our cruise ship.',
      link: '/bridal-shower-info',
      image: 'https://media.licdn.com/dms/image/D4D12AQEaS2l8b6SWbQ/article-cover_image-shrink_720_1280/0/1686893693538?e=2147483647&v=beta&t=WWpSX_8SlywNQwDx72Z_EGiprJlTZHI7_HTfVnc9vBM',
      price: '$250 per person',
      totalTickets: 40,
      additionalInfo: 'Throwing a bridal shower for the bride-to-be, but not sure what to say in the Invitations? Listed below are a few examples of our bridal shower invitation wording, mix and match and come up with your own creative expression.      When you have found the perfect wording to use, shop our collection of bridal shower invitations in a variety of styles, from modern to vintage . All the text on our bridal shower invitations designs can be fully personalized.',
    },
    {
      name: 'Wedding Anniversaries',
      description: 'Celebrate your love on our romantic cruise.',
      link: '/anniversary-info',
      image: 'https://www.momjunction.com/wp-content/uploads/2014/08/You-made-me-the-man-I-am-today.jpg',
      price: '$400 per couple',
      totalTickets: 30,
      additionalInfo: 'There’s nothing more romantic than reminiscing on your wedding day. Remembering the vows you made and the loved ones you shared them with will help you get in touch with your romantic side. Send the love of your life happy anniversary cards from our sister company, Snapfish, and add one of these romantic anniversary messages to make it unique.',
    },
    {
      name: 'Corporate Events',
      description: 'Plan a corporate event with a view.',
      link: '/corporate-event-info',
      image: 'https://www.tantraa.net/images/portfolio/events/carousel2.png',
      price: '$500 per person',
      totalTickets: 20,
      additionalInfo: 'Plans are nothing. Planning is everything.” – Albert Einstein Is there anything more critical to an event planner’s process than planning, planning and planning some more? Having big ideas is great, but they’re nothing without rolling your sleeves up and getting down to the actual planning that goes into any big event or program. And, at the end of the day, that’s everything.',
    },
    {
      name: 'Baby Showers',
      description: 'Host a baby shower with a nautical theme.',
      link: '/baby-shower-info',
      image: 'https://i0.wp.com/amritammu.com/wp-content/uploads/2020/04/Pre-baby-shoot-maternity-photographer-Mumbai-baby-shower-photoshoot-baby-bump-shoot-maternity-photoshoot-mumbai-38.jpg',
      price: '$200 per person',
      totalTickets: 60,
      additionalInfo: 'A baby shower serves as a pleasant diversion from all the craziness and a fun time for the guest of honor to show off her ever-adorable baby bump. This is also the perfect time to celebrate one last hurrah with the girls before the baby says, “Hello, World!” As a guest, you’ll want to assure that this day goes as smoothly as possible, full of celebrations and smiles. Add your touching baby shower wishes and messages to great personalized gifts, like baby blankets, story books, notepads, serving platters, and mugs. ',
    },
    {
      name: 'Kitty Parties',
      description: 'Enjoy a kitty party with friends and family.',
      link: '/kitty-party-info',
      image: 'https://i.pinimg.com/originals/9b/46/8c/9b468c362d7827538de3bc82008957f2.png',
      price: '$150 per person',
      totalTickets: 25,
      additionalInfo: 'Few threads in the colorful fabric of our social lives are as pleasant as the colorful gatherings known as kitty parties.These meetings, packed with laughter, camaraderie, and a touch of friendly competitiveness, provide the ideal setting for expressing gratitude and appreciation. ',
    },
    {
      name: 'Seminars',
      description: 'Conduct seminars on our cruise ship.',
      link: '/seminar-info',
      image: 'https://www.matrix.edu.au/wp-content/uploads/2022/09/website-banner-year-10-year-11-free-atar-scaling-seminar-parramatta-2023-august.jpg',
      price: 'Contact us for pricing',
      totalTickets: 50,
      additionalInfo: 'Spacious meeting rooms with AV equipment.',
    },
    {
      name: 'Bachelorette Parties',
      description: 'Celebrate your last fling before the ring.',
      link: '/bachelorette-party-info',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxL04fTSpEGURXWnIB3O0dUjyulIkgjVhokA&usqp=CAU',
      price: '$350 per person',
      totalTickets: 35,
      additionalInfo: 'Party games and entertainment.',
    },
  ];const [activeCategory, setActiveCategory] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const rotateCategories = () => {
    setActiveCategory((prevCategory) =>
      prevCategory === eventCategories.length - 1 ? 0 : prevCategory + 1
    );
  };

  const toggleModal = (event) => {
    setSelectedEvent(event);
    setShowModal(!showModal);
  };

  const toggleBookingModal = () => {
    setShowBookingModal(!showBookingModal);
  };

  useEffect(() => {
    const intervalId = setInterval(rotateCategories, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  return (
    <section className="event">
      <div className="event-tiles">
        {eventCategories.map((category, index) => (
          <div
            className={`event-tile ${index === activeCategory ? 'active' : ''}`}
            key={index}
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${category.image})`,
            }}
          >
            <h3>{category.name}</h3>
            <p>Price: {category.price}</p>
            <p>Total Tickets: {category.totalTickets}</p>
            <button className="eventbtn" onClick={() => toggleModal(category)}>
              Details
            </button>
          </div>
        ))}
      </div>
      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Event Details"
        overlayClassName="overlay"
      >
        {selectedEvent && (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <h1>{selectedEvent.name}</h1>
              <h3>{selectedEvent.description}</h3>
              <p><b>Price:</b> {selectedEvent.price}</p>
              <p><b>Total Tickets:</b> {selectedEvent.totalTickets}</p>
              <p>{selectedEvent.additionalInfo}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={closeModal} className='btn'>Close</button>
                <button className='btn' style={{ backgroundColor: 'green' }} onClick={toggleBookingModal}>Book Now</button>
              </div>
            </div>
            <div style={{ width: '50%', height: '600px' }}>
              <img src={selectedEvent.image} alt='Image' width='100%' height='100%' />
            </div>
          </div>
        )}
      </ReactModal>
      {showBookingModal && <BookingForm isOpen={showBookingModal} onClose={closeBookingModal} />}
    </section>
  );
}

export default EventSection;