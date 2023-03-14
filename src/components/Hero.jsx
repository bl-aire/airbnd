import group from '../assets/Group.png'

export default function Hero() {
    return(
        <div className='hero'>
            <div className='hero_container'>
                <img src={group} className="hero_image"/>
            </div>
            <div className='text'>
                <h1 className='hero_title'>Online Experiences</h1>
                <p className='hero_text'>Join unique interactive activities led by one-of-a-kind hosts all without leaving your home.</p>
            </div>
        </div>
    )
}