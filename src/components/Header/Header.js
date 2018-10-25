import React from 'react';

const Header = function( props ){
    return (<header className="top">
                <h1>
                    {props.title}
                </h1>
            </header>)
}

export default Header;