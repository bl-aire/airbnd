import star from '../assets/star.png'

export default function Card({img, r1, r2, location, title, price}) {
    
    return (
        <div className='card'>
            {/*<div className='image_bg' style={{backgroundImage: `url{props.img}`, height: `355px`}}>
                <button className='sold-out'>Sold out</button>
            </div>*/}
            <div>
                <img src={img} alt="" height="355px" />
            </div>
            <span className='rating'>
                <img src={star} alt="star icon" className='star' />
                <span className='rate'>{r1}</span>
                <span className='rate'>({r2}) • </span>
                <span>{location}</span>
            </span>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}