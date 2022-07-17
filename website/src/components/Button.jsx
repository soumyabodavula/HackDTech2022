import React from 'react'
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = (props, {children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a target="_blank" rel='noreferrer' href = {props.path} className = 'btns-link'>
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