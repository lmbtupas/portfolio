import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './index.scss';
import Navbar from '../navbar';

import me from '../../assets/me.png';
import Name_Sticker from '../../assets/Name_Sticker.png';
import Sticker_1 from '../../assets/Sticker_1.png';
import Sticker_3 from '../../assets/Sticker_3.png';
import Sticker_4 from '../../assets/Sticker_4.png';
import about_me from '../../assets/about_me.png';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Parallax pages={6}>
                <div className='main_container'>

                    <section className='start_section'>
                        <ParallaxLayer offset={0} speed={0.5}>
                            <div className='start_container'>
                                <h1> A Designer and Developer all in one.</h1>
                            </div>
                        </ParallaxLayer>
                    </section>

                    <section className='hero_section'>
                        <ParallaxLayer offset={1} speed={1}>
                            <div className='me_container'>
                                <img src={me} alt="me" className="me_photo"/>
                            </div>
                        </ParallaxLayer>
                        
                        <ParallaxLayer offset={1} speed={0.7}>
                            <div className='ns_container'>
                                <img src={Name_Sticker} alt="Name_Sticker" className="Name_Sticker"/>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} speed={0.3}>
                            <div className='s1_container'>
                                <img src={Sticker_1} alt="Sticker_1" className="Sticker_1"/>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} speed={0.2}>
                            <div className='s2_container'>
                                <img src={Sticker_3} alt="Sticker_3" className="Sticker_2"/>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer offset={1} speed={0.1}>
                            <div className='s3_container'>
                                <img src={Sticker_4} alt="Sticker_4"className="Sticker_3" />
                            </div>
                        </ParallaxLayer>
                    </section>

                    <section className='about_section'>
                        <div className='about_container'>
                            <h1> About Me</h1>
                            <h1> Hi, I'm Yancy!</h1>
                            <p> Hey there! I'm Leandro Tupas, but you can call me Yancy. I'm a 21-year-old computer science student, currently diving into my fourth year of studies. My passion lies in frontend development, where I enjoy crafting user-friendly and visually appealing interfaces. With a keen eye for design and a strong coding background, I strive to create engaging digital experiences that leave a lasting impact.</p>
                        </div>

                        <div className='about_photo'>
                            <img src={about_me} alt="about_me" className="about_me_photo"/>
                        </div>
                    </section>

                    <section className='skills_section'>
                        <div className='skills_container'>
                            <h1> Skills and Experience</h1>
                        </div>
                    </section>

                    <section className='services_section'>
                        <div className='services_container'>
                            <h1> My Services</h1>
                        </div>
                    </section>

                    <section className='works_section'>
                        <div className='works_container'>
                            <h1> My Works</h1>
                        </div>
                    </section>
                </div>
            </Parallax>
        </>
    )
}

export default Layout;