import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a target = '_blank' rel='noreferrer' href={link} className = 'btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </a>
            
    )
/*
"https://www.weareplannedparenthoodaction.org/onlineactions/6iOI0_HnUUmPu_6_SRgayg2?sourceid=1006442&ms=4NALz2100K1N1A&gclid=Cj0KCQjwntCVBhDdARIsAMEwAClcPtU6PoA-5uovdBodL0hQYHqXwfUM35UEHiu7wuQgd-yc-7QkYeUaAilKEALw_wcB&gclsrc=aw.ds"
*/

};