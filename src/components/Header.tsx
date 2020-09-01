import React, { Component } from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
    padding: '10px 40px',
    backgroundColor: 'lightgrey',
}

class Header extends Component {
    render() {
        return <header style={style}>
            <button>New note</button>
        </header>
    }
}

export default Header;