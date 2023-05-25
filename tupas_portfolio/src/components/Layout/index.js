import './index.scss';
import Navbar from '../navbar';
import me from '../../assets/me.png';
import Sticker_1 from '../../assets/Sticker_1.png'
import Sticker_3 from '../../assets/Sticker_3.png'
import Sticker_4 from '../../assets/Sticker_4.png'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='main_container'>
                <div className='me_container'>
                    <img src={me} alt="me" />
                </div>

                <div className='s1_container'>
                    <img src={Sticker_1} alt="Sticker_1" />
                </div>c

                <div className='s2_container'>
                    <img src={Sticker_3} alt="Sticker_3" />
                </div>

                <div className='s3_container'>
                    <img src={Sticker_4} alt="Sticker_4" />
                </div>
            </div>
        </>
    )
}

export default Layout;