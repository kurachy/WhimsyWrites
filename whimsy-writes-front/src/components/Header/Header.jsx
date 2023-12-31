import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
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
           <ul>
               <li className='primary-button login-button'><Link to={'/Login'}>Login</Link></li>
               <li className='secondary-button signup-button'><Link to={'/Signup'}>Signup</Link></li>
               <li className='header__search'><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
             
           </ul>
       </nav>
    </header>
    )
}