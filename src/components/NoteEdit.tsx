import React, { Component } from 'react';
import CSS from 'csstype';

type NoteEditProps = {
    text: string,
}

const style: CSS.Properties = {
    padding: '10px 20px',
    height: '50vh'
}

type NoteEditState = {
    value: string
}

class NoteEdit extends Component<NoteEditProps, NoteEditState> {

    constructor(props: NoteEditProps) {
        super(props);
        this.state = { value: this.props.text };
    }
    
    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        return {
            value: nextProps.text
        };
    }

    render() {
        return <textarea id="textearea" style={style} value={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
    }
}

export default NoteEdit;