import React from 'react'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
          <a target='_blank' rel='noreferrer' className='cards__item__link' href={props.path}>
              <figure className="cards__item__pic-wrap" data-category={props.label}>
                  <img src={process.env.PUBLIC_URL + props.src} alt="Travel" className="cards__item__img" />
              </figure>
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.text}</h5>
              </div>
          </a>
      </li>
    </>
  )
}

export default CardItem;

/* <a target="_blank" rel='noreferrer' className = 'cards__item__link'
href = "https://www.plannedparenthood.org/health-center/north-carolina/chapel-hill/27514/chapel-hill-health-center-4169-90860"
> */