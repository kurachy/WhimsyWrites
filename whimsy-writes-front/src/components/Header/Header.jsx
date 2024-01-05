import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Logout from '../Logout/Logout'
import './header.css'

export default function Header() {
    return(
        <header className='ww__header'>
            <button className="header__menu"><FontAwesomeIcon icon={faBars} /></button>
        <Link to={'/'} className="header__logo">
            WhimsyWrites
        </Link>

        <nav className='header__main-links'>
           
            <ul className='header__main-links'>
                <li className='selected'><a href="#">Trending</a></li>
                <li><a href="#">Latest</a></li>
                <li><a href="#">Random</a></li>
              
            </ul>
        </nav>

        <nav className='header__signup-and-search'>
            <Logout />
           <ul>
               <li className='primary-button login-button'><Link to={'/Login'}>Login</Link></li>
               <li className='secondary-button signup-button'><Link to={'/Signup'}>Signup</Link></li>
               <li className='header__search'><Link to={'/dashboard'} ><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></li>
             
           </ul>
       </nav>
    </header>
    )
}