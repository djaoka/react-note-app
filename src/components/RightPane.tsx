import React, { FunctionComponent } from 'react';
import CSS from 'csstype';

type RightPaneProps = {
}

const style: CSS.Properties = {
    display: "flex",
    flexGrow: 1,
}

export const RightPane: FunctionComponent<RightPaneProps> = ({ children }) => <div style={style}>
    { children }
</div>