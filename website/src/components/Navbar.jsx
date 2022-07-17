import React, {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <i className="fa-solid fa-venus fa-flip slow-flip"></i>
            </Link>
            <div className = 'menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to='/' className = 'nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/services' className = 'nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to='/products' className = 'nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className = 'nav-item'>
                <a target="_blank" rel='noreferrer' className = 'nav-links-mobile' onClick={closeMobileMenu}
                    href = "https://www.weareplannedparenthoodaction.org/onlineactions/6iOI0_HnUUmPu_6_SRgayg2?sourceid=1006442&ms=4NALz2100K1N1A&gclid=Cj0KCQjwntCVBhDdARIsAMEwAClcPtU6PoA-5uovdBodL0hQYHqXwfUM35UEHiu7wuQgd-yc-7QkYeUaAilKEALw_wcB&gclsrc=aw.ds"
                    >
                    DONATE TODAY
                </a>
                {/* <Link to={{ pathname: "https://www.weareplannedparenthoodaction.org/onlineactions/6iOI0_HnUUmPu_6_SRgayg2?sourceid=1006442&ms=4NALz2100K1N1A&gclid=Cj0KCQjwntCVBhDdARIsAMEwAClcPtU6PoA-5uovdBodL0hQYHqXwfUM35UEHiu7wuQgd-yc-7QkYeUaAilKEALw_wcB&gclsrc=aw.ds" }} target="_blank" rel='noreferrer' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                        DONATE TODAY
                    </Link> */}
                </li>
            </ul>
            {button && <Button path = "https://www.weareplannedparenthoodaction.org/onlineactions/6iOI0_HnUUmPu_6_SRgayg2?sourceid=1006442&ms=4NALz2100K1N1A&gclid=Cj0KCQjwntCVBhDdARIsAMEwAClcPtU6PoA-5uovdBodL0hQYHqXwfUM35UEHiu7wuQgd-yc-7QkYeUaAilKEALw_wcB&gclsrc=aw.ds" 
                            buttonStyle = 'btn--outline'>DONATE TODAY</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
