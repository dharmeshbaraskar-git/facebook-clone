import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarOption.css';
function SidebarOption({ title, avatar, Icon }) {
    return (
        <div className="sidebarOption">
            {avatar ? (<Avatar src={avatar} />) : (Icon && <Icon />)}
            <h4> {title}</h4>
        </div>
    );
}

export default SidebarOption;