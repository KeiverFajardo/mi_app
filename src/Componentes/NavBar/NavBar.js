import React from 'react';

const NavBar = () => {
    return (
        <div>
            Component
            <div>
            <nav class="navbar navbar-default">
                <div className="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">MyWebsite</a>
                    </div>
                    <ul class="nav navbar-nav">	  
                        <li class="active"><a href="#">Link 1</a></li>		  
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