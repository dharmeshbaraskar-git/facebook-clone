import React from 'react';
import './Sidebar.css'
import { Avatar } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupIcon from '@material-ui/icons/Group';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { useStateValue } from './stateProvider';

function Sidebar(props) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user.photoURL} /><h4>{user.displayName}</h4>
            </div>
            <SidebarOption title="COVID-19 Information Center" avatar="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png" />
            <SidebarOption title="Friends" avatar="" Icon={GroupIcon} />
            <SidebarOption title="Groups" avatar="" Icon={GroupRoundedIcon} />
            <SidebarOption title="Marketplace" avatar="" Icon={AddCircleOutlineIcon} />
            <SidebarOption title="Watch" avatar="" Icon={OndemandVideoIcon} />
            <SidebarOption title="Event" avatar="" Icon={EventAvailableRoundedIcon} />
            <SidebarOption title="Memories" avatar="" Icon={WatchLaterOutlinedIcon} />
            <SidebarOption title="Saved" avatar="" Icon={BookmarkOutlinedIcon} />
        </div>
    );
}

export default Sidebar;