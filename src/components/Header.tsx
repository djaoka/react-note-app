import React, { Component } from 'react';
import CSS from 'csstype';

const style: CSS.Properties = {
    padding: '10px 40px',
    backgroundColor: 'lightgrey',
}

type HeaderProps = {
    onAddNote: any,
    disabled: boolean
}

class Header extends Component<HeaderProps, {}> {
    render() {
        return <header style={style}>
            <button onClick={() => this.props.onAddNote()} disabled={this.props.disabled}> + New note</button>
        </header>
    }
}

export default Header;