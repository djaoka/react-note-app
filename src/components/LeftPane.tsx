import React, { FunctionComponent } from 'react';
import CSS from 'csstype';

type LeftPaneProps = {
}

const style: CSS.Properties = {
    display: "flex",
    flexGrow: 1,
    border: '1px solid #ccc',
}

export const LeftPane: FunctionComponent<LeftPaneProps> = ({ children }) => <div style={style}>
    { children }
</div>