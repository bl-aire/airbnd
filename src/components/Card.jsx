import star from '../../public/images/star.png'

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            
            {badgeText && <div className='badge'>{badgeText}</div>}
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