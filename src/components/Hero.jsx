import group from '../../public/images/Group.png'

export default function Hero() {
    return(
        <section className='hero'>
            <img src={group} className="hero_image"/>
            <h1 className='hero_title'>Online Experiences</h1>
            <p className='hero_text'>Join unique interactive activities led by one-of-a-kind hosts all without leaving your home.</p>
        </section>
    )
}