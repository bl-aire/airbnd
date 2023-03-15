import star from '../assets/star.png'
import smile from '../assets/smile.png'

export default function Card() {
    return (
        <div className='card'>
            <div className='image_bg'>
                <button className='sold-out'>Sold out</button>
            </div>
            <span className='rating'>
                <img src={star} alt="star icon" className='star' />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </span>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}