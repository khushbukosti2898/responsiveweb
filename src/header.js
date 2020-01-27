import React from 'react';
import './style.scss';
import clogo from './clogo.jpg';

class Header extends React.Component{
    render(){

        return <div className="header">
                {/* <div className="logo">
                    <img src={computerlogo} alt="logo" height="100px" width="100px"></img>
                </div>
                
                <ul className="menu">  
                    <li>Home</li>  
                    <li>Profile</li>   
                    <li>Service</li> 
                    <li>Contact</li>  
                    <li>About </li>   
                    <li>Logout</li>  
                </ul> */}
                <nav className="navbar navbar-inverse ">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" 
                    data-toggle="collapse" 
                    data-target="#Content">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="App.js"><span>
                        <img src={clogo} alt="logo" height="36px" width="100px"></img></span></a>
                </div>
                <div className="collapse navbar-collapse" id="Content">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#" color="white">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                </nav>
        </div>
    }
}

export default Header;