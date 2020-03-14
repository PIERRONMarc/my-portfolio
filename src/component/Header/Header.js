import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() { 
        return ( 
            <header className="m-10">
                <h3 className="html-tags">&lt;html lang=" "&gt;</h3><br/>
                <h3 className="ml-10 html-tags">&lt;body&gt;</h3>
            </header>
         );
    }
}
 
export default Header;