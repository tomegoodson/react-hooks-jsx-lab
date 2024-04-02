// Home.js
import React from 'react';
import { name, city } from '../data/data.js'; // Assuming you have imported 'name' and 'city' from your data file

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;