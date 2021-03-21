// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import Logo from '../../components/Logo';
import RainbowIcon from '../../components/RainbowIcon';
import Bell from '../../components/SVGComponents/bell';
import Search from '../../components/SVGComponents/search';

// styles
import './header.scss'

interface HeaderProps {
    isAuthenticated?: boolean, 
    location: any
}

const Header = (props: HeaderProps) => {
    const {isAuthenticated, location} = props;
    
    return (
        <header className="header">
            <div className="leftNav">
                <Link to="/Login"><Logo /></Link>
                 {location.pathname === '/' &&   <ul>
                         <li><Link to="/"> Home</Link></li>
                         <li><Link to="/"> Generi</Link></li>
                         <li><Link to="/"> Preferiti</Link></li>
                         
                     </ul>}
            </div>
            
            <div className="icon">
            <RainbowIcon />
            </div>
            <div className="rightNav">
                
                 <>
                    <Link  className="navlink" to="/">
                        <Search />
                    </Link>

                    <Link className="navlink" to="/">
                      <Bell />
                    </Link>
                    <Link className="navlink" to="/">
                     <img src="https://loremflickr.com/240/240/headshot,portrait,girl/all" alt="user profile - woman with glasses" />
                    </Link>
                 </>
                 
            </div>
           
        </header>
    )
}

export default Header;
