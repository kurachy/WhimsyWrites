import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import './header.css'

export default function Header() {
    return(
        <header className='ww__header'>
            <button className="header__menu"><FontAwesomeIcon icon={faBars} /></button>
        <div className="header__logo">
            WhimsyWrites
        </div>

        <nav className='header__main-links'>
           
            <ul className='header__main-links'>
                <li className='selected'><a href="#">Trending</a></li>
                <li><a href="#">Latest</a></li>
                <li><a href="#">Random</a></li>
              
            </ul>
        </nav>

        <nav className='header__signup-and-search'>
           
           <ul>
               <li className='primary-button login-button'><a href="#">Login</a></li>
               <li className='secondary-button signup-button'><a href="#">Signup</a></li>
               <li className='header__search'><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
             
           </ul>
       </nav>
    </header>
    )
}