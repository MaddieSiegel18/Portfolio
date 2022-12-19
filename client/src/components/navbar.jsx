import React from 'react';
import '../App.css';
import '../styles/navbar.css'
import {Link} from "react-scroll"

function NavBar() {

    

    return (
        <div className='navMain'>
            <div className="navWrapper">
                
                <p className='MyName'>Maddie Siegel</p>
                
                <div className='scrollNav'>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                    <Link to="workAndSkillsdiv" spy={true} smooth={true} offset={50} duration={500}>Work & Skills</Link>
                </div>
            </div>
            
        </div>




    );
}

export default NavBar;