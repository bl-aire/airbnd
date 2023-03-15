import star from '../assets/star.png'

export default function Card(props) {
    console.log(props)
    return (
        <div className='card'>
            {/*<div className='image_bg' style={{backgroundImage: `url{props.img}`, height: `355px`}}>
                <button className='sold-out'>Sold out</button>
            </div>*/}
            <div>
                <img src={props.img} alt="" height="355px" />
            </div>
            <span className='rating'>
                <img src={star} alt="star icon" className='star' />
                <span>{props.r1}</span>
                <span>{props.r2}</span>
                <span>{props.location}</span>
            </span>
            <p>{props.title}</p>
            <p><b>From {props.price}</b> / person</p>
        </div>
    )
}