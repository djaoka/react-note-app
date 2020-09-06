import React, { Component } from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
    padding: '10px 40px',
    backgroundColor: 'lightgrey',
}

type HeaderProps = {
    onAddNote: any,
}

class Header extends Component<HeaderProps, {}> {
    render() {
        return <header style={style}>
            <button onClick={() => this.props.onAddNote()}> + New note</button>
        </header>
    }
}

export default Header;