// About.js
import React from 'react';
import { image } from '../data/data.js'; // Assuming you have imported 'image' from your data file

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Insert your content here...</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
