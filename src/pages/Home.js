import React from 'react';
import chicken from '../chicken.jpeg'
import './Home.css'

export default function Home() {
  return (
    
    <div className="home">
      <header className="home-header">
        <img src={chicken} className="home-logo" alt="logo" />
        <p>
          These eggs have hatched and are ready to be matched!
        </p>
        <a
          className="home-link"
          href="https://youtu.be/9MrCLKhJ--A?t=37"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the coop
        </a>
      </header>
    </div>
  )
}