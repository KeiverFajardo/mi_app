import React from 'react';

const NavBar = () => {
    return (
        <div>
            Component
            <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">MyWebsite</a>
                    </div>
                    <ul className="nav navbar-nav">	  
                        <li className="active"><a href="#">Link 1</a></li>		  
                        <li><a href="./">Link 2</a></li>
                        <li><a href="./">Link 3</a></li>
                        <li><a href="./">Link 4</a></li>
                    </ul>
                    
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-star-empty"></span> RLink 1</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-search"></span> RLink 2</a></li>
                    </ul>
                    
                </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;