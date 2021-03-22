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


const Header  = () => {
  
    return (
        <header className="header">
            <div className="leftNav">
                <Link to="/"><Logo /></Link>
                
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
