import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 className = 'header-header'>Find an abortion clinic near you</h1>
      <div className="cards__container">
          <div className="cards__wrapper">
          <h2 className='header-locs'>Raleigh-Durham</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m1.jpg'
                  text='Planned Parenthood Chapel Hill'
                  label='1765 Dobbins Dr - (919) 942-7762'
                  path="https://www.plannedparenthood.org/health-center/north-carolina/chapel-hill/27514/chapel-hill-health-center-4169-90860"
                  />
                  <CardItem src='/images/m2.jpg'
                  text="North Durham Women's Health"
                  label='400-B Crutchfield St - (919) 908-6449'
                  path='https://northdurhamwomenshealth.com/'
                  />
                  <CardItem src='/images/m3.jpg'
                  text="A Woman's Choice of Raleigh"
                  label='3305 Drake Circle - (800) 540-5690'
                  path='https://www.awomanschoiceinc.com/?gclid=CjwKCAjw5s6WBhA4EiwACGncZVi4sg_jKTyMejLFnvEcxnlRjkKGCsG6mnSkpbGZ-J3LmXmODaScYBoCSosQAvD_BwE'
                  />
                  <CardItem src='/images/m4.jpg'
                  text="A Preferred Women's Health of Raleigh"
                  label='1604 Jones Franklin Rd - (919) 854-7888'
                  path='https://abortionclinicservicesraleighnc.com/contact-us/schedule-appointment/'
                  />
              </ul>
              <h2 className='header-locs'>Charlotte</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m5.jpg'
                  text="A Preferred Women's Health of Charlotte"
                  label='3220 Latrobe Dr - (704) 665-4120'
                  path='https://abortionclinicservicescharlottenc.com/?gclid=CjwKCAjw5s6WBhA4EiwACGncZRMKlco74SErlNl7h8bhnnDLKo9eYv0zC10waw2A_b3l_foEsAI7IRoCuoIQAvD_BwE'
                  />
                  <CardItem src='/images/m6.jpg'
                  text="A Woman's Choice of Charlotte"
                  label='421 Wendover Rd - (800) 637-3445'
                  path='https://www.awomanschoiceinc.com/awc-charlotte'
                  />
                  <CardItem src='/images/m7.jpg'
                  text='Planned Parenthood Charlotte'
                  label='700 South Torrence Street - (704) 536-7233'
                  path='https://www.plannedparenthood.org/health-center/north-carolina/charlotte/28204/charlotte-health-center-2703-90860'
                  />
              </ul>
              <h2 className='header-locs'>Winston-Salem</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m8.jpg'
                  text='Planned Parenthood Wintson-Salem'
                  label='3000 Maplewood Ave Suite 112 - (336) 768-2980'
                  path='https://www.plannedparenthood.org/health-center/north-carolina/winston-salem/27103/winston-salem-health-center-2845-90860'
                  />
                  <CardItem src='/images/m9.jpg'
                  text="Hallmark Women's Clinic"
                  label='491 Cleveland Ave - (888) 725-4924'
                  path='https://ahallmarkwomensclinic.com/abortion-pill-in-winston-salem-nc/'
                  />
              </ul>
              <h2 className='header-locs'>Fayetteville</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m10.jpg'
                  text='Planned Parenthood Fayetteville'
                  label='4551 Yadkin Rd - (866) 942-7762'
                  path='https://www.plannedparenthood.org/health-center/north-carolina/fayetteville/28303/fayetteville-health-center-4173-90860'
                  />
                  <CardItem src='/images/m11.jpg'
                  text="Hallmark Women's Clinic"
                  label='1919 Gillespie St - (910) 323-3792'
                  path='https://ahallmarkwomensclinic.com/abortion-fayetteville-nc/'
                  />
              </ul>
              <h2 className='header-locs'>Asheville</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m12.jpg'
                  text='Planned Parenthood Asheville'
                  label='68 McDowell St - (828) 282-7928'
                  path='https://www.plannedparenthood.org/health-center/north-carolina/asheville/28801/asheville-health-center-4134-90860'
                  />
              </ul>
              <h2 className='header-locs'>Greensboro</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m13.jpg'
                  text="A Woman's Choice of Greensboro"
                  label='2425 Randleman Rd - (844) 219-7668'
                  path='https://www.awomanschoiceinc.com/awc-greensboro'
                  />
              </ul>
              <h2 className='header-locs'>Wilmington</h2>
              <ul className="cards__items">
                  <CardItem src='/images/m14.jpg'
                  text='Planned Parenthood Wilmington'
                  label='1925 Tradd Court - (910) 762-5566'
                  path='https://www.plannedparenthood.org/health-center/north-carolina/wilmington/28401/wilmington-health-center-2595-90860'
                  />
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Cards;
