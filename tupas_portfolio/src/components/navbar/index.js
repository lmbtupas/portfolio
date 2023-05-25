import { Link, NavLink } from 'react-router-dom'
import Name_Sticker from '../../assets/Name_Sticker.png'
import './index.scss'

const Navbar = () => (
    <div className='nav-bar'>
        <div className='container'>
            <Link className='logo' to='/'>
                <img src={Name_Sticker} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    Home
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    About
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/work">
                    Work
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    Contact
                </NavLink>
            </nav>
        </div>
    </div>
)

export default Navbar