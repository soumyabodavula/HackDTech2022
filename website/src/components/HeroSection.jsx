import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className = 'hero-container'>
        <video src = './videos/RoevWade.mp4'autoPlay loop muted />
        <h1 className = 'hero-header'>NC ABORTION RESOURCES</h1>
        <p>All North Carolina clinics in one place</p>
        <div className = 'hero-btns'>
            <Button path = 'https://www.youtube.com/watch_popup?v=3my8BGbXaTw&autoplay=1' className = 'btns' buttonStyle = 'btn--outline' buttonSize = 'btn--large'>
                LEARN MORE <i className = 'far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
