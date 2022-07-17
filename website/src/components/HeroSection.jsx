import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
        <video src = './videos/RoevWade.mp4'autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>Abortion Clinics in North Carolina</p>
        <div className = 'hero-btns'>
            <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>
                GET STARTED
            </Button>
            <Button className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>
                WATCH TRAILER <i className = 'far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection