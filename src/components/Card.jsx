import star from '../../public/images/star.png'

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    
    return (
        <div className='card'>
            {/*<div className='image_bg' style={{backgroundImage: `url{props.img}`, height: `355px`}}>
                <button className='sold-out'>Sold out</button>
            </div>*/}
            {openSpots === 0 && <div className='badge'>SOLD OUT</div>}
            <img src={img} alt="" height="300px" className='card_img' />
            
            <span className='rating'>
                <img src={star} alt="star icon" className='star' />
                <span className='rate'>{rating}</span>
                <span className='rate'>({reviewCount}) • </span>
                <span>{location}</span>
            </span>
            <p className='card_title'>{title}</p>
            <p className='card_price'><b>From ${price}</b> / person</p>
        </div>
    )
}