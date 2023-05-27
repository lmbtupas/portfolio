import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './index.scss';
import Navbar from '../navbar';

import me from '../../assets/me.png';
import Name_Sticker from '../../assets/Name_Sticker.png'
import Sticker_1 from '../../assets/Sticker_1.png'
import Sticker_3 from '../../assets/Sticker_3.png'
import Sticker_4 from '../../assets/Sticker_4.png'

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })     
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

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
                        </div>
                    </section>

                    <section className='skills_section'>
                        <div className='skills_container'>
                            <h1> Skills and Experience</h1>
                        </div>
                    </section>

                    <section className='services_section'>
                        <h1> My Services</h1>
                        <div className='services_container'>

                            <div className='brand_container'>
                                <div className='brand_details hidden'>
                                    <img src={Sticker_3} alt="Sticker_3" className="Sticker_2"/>
                                    <h1>Brand Design</h1>  
                                    <p> Crafting impactful brand identities that capture the essence of your business. From logo design to brand guidelines, I create visual assets that resonate with your target audience and convey your unique story. </p>
                                </div>
                            </div>

                            <div className='fe_dev'> 
                                <div className='fe_details hidden'>
                                    <img src={Sticker_1} alt="Sticker_1" className="Sticker_1"/>
                                    <h1>Frontend Development</h1>                       
                                    <p>Transforming designs into seamless user experiences through clean and efficient code. I specialize in creating responsive websites and web applications that not only look stunning but also provide a smooth and intuitive interface for users.</p>
                                </div>
                            </div>

                            <div className='ui_design'>
                                <div className='ui_details hidden'>
                                    <img src={Sticker_4} alt="Sticker_4"className="Sticker_3" />
                                    <h1>UI/UX Design</h1>
                                   <p>Designing user-centered interfaces that enhance the overall user experience. From wireframes to interactive prototypes, I create visually appealing and functional designs that prioritize usability, accessibility, and engagement, resulting in a delightful user journey.</p> 
                                </div>
                            </div>
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