// react libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import Youtube from '../../components/SVGComponents/youtube';
import Facebook from '../../components/SVGComponents/facebook';
import Twitter from '../../components/SVGComponents/twitter';

// styles
import './footer.scss'



const Footer = () => {
    return (
        <footer className="footer">
          
          <div className="footer_bottom">
              <p>2021 Space X - Made by <a href="https://github.com/devPinheiro">devPinheiro</a></p>
              <div className="socials">
                 <ul>
                    <li className="facebook"><Link to="/"><Facebook /></Link></li>
                    <li className="twitter"><Link to="/"><Twitter /></Link></li>
                    <li><Link to="/"> <Youtube /></Link></li>
                 </ul>
              </div>
          </div>
        </footer>
    )
}

export default Footer