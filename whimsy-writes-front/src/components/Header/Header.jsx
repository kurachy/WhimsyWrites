import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from "react-router-dom"
import Logout from '../Logout/Logout'
import './header.css'

export default function Header() {
    const { authState } = useAuth();
    const location = useLocation();

    return (
        <header className='ww__header'>

            {
                (authState.accessToken === null || (authState.accessToken && location.pathname === "/")) ?
                    <nav className='header__mobile-menu'>
                        <div className="mobile-menu__toggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            {
                                authState.accessToken ?
                                    <ul className='mobile-menu__links'>
                                        <li className='selected'><a href="#">Trending</a></li>
                                        <li><a href="#">Latest</a></li>
                                        <li><a href="#">Random</a></li>
                                    </ul>
                                    :
                                    location.pathname === "/" ?
                                        <ul className='mobile-menu__links'>
                                            <li className='primary-button login-button'><Link to={'/Login'}>Login</Link></li>
                                            <li className='secondary-button signup-button'><Link to={'/Signup'}>Signup</Link></li>
                                            <li className='selected'><a href="#">Trending</a></li>
                                            <li><a href="#">Latest</a></li>
                                            <li><a href="#">Random</a></li>
                                        </ul>
                                        :

                                        <ul className='mobile-menu__links'>
                                            <li className='primary-button login-button'><Link to={'/Login'}>Login</Link></li>
                                            <li className='secondary-button signup-button'><Link to={'/Signup'}>Signup</Link></li>
                                        </ul>
                            }
                        </div>
                    </nav>
                    : null
            }

            <Link to={'/'} className="header__logo">
                WhimsyWrites
            </Link>
            {location.pathname === "/" ? <nav className='header__main-links'>

                <ul className='header__main-links'>
                    <li className='selected'><a href="#">Trending</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">Random</a></li>

                </ul>
            </nav> : null}


            <nav className='header__signup-and-search'>
                {authState.accessToken ? 
                <details className="header__profile-dropdown">
                <summary role="button">
                  <a className="profile-dropdown__image"><img src='https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg'></img></a>
                </summary>
                <ul>
                  <li><Link to={'/dashboard'}>Dashboard <FontAwesomeIcon icon={faNewspaper} /></Link></li>
                  <li><Logout/></li>
              </ul>
            </details>
                : <ul>
                    <li className='primary-button login-button'><Link to={'/Login'}>Login</Link></li>
                    <li className='secondary-button signup-button'><Link to={'/Signup'}>Signup</Link></li>
                </ul>}



            </nav>
        </header>
    )
}