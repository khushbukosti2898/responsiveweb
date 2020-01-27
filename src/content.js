import React from 'react';
import computer1 from './computer1.png';
import './style.scss';

class Content extends React.Component{
    render(){
        return <div>
            <h2>
                <marquee>Welcome to Computer Shop</marquee>
            </h2>
            <div className="container">
                <div className="content">
                <h3>HP</h3>
                <p> <img src={computer1} alt="computer" className="zoom"/></p>
                <pre>Price: 3000 Rs.</pre>
                </div>

                <div className="content">
                <h3>INTEX</h3>
                <p><img src={computer1} alt="computer" className="zoom"/></p>
                <pre>Price: 3000 Rs.</pre>
                </div>
            
                <div className="content">
                <h3>View Sonic</h3>
                <p><img src={computer1} alt="computer" className="zoom"/></p>
                <pre>Price: 3000 Rs.</pre>
                </div>
                
            </div>
        </div>
    }
}

export default Content;