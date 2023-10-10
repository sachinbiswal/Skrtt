import React from 'react';
import './About.css'
function About() {
  const aboutData = {
    title: 'About Us',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium nunc et orci finibus, eu dictum mauris tristique. Proin ultricies nibh nec nunc tempor, a scelerisque odio convallis.',
    teamMembers: [
      { name: 'Sachin kumar Biswal', role: 'Founder' },
      { name: 'Malaya Ranjan Dani', role: 'Designer' },
      { name: 'Vladimir Putin', role: 'Executor' },
    ],
  };

  return (
    <div className="about">
      <h2 style={{textAlign:"center"}}>{aboutData.title}</h2>
      <p>{aboutData.description}</p>
      <br/>
      <h3>Our Team</h3>
      <ul>
        {aboutData.teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
