import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupIcon from '@material-ui/icons/Group';
import GamesIcon from '@material-ui/icons/Games';
import { Avatar } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { useStateValue } from './stateProvider';
function Header() {
    const [{ user }, dispacth] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header_center">
                <HomeIcon />
                <OndemandVideoIcon />
                <GroupIcon />
                <GamesIcon />
            </div>
            <div className="header_right">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
                <AddCircleOutlineIcon fontSize="large" />
                <MessageIcon fontSize="large" />
                <NotificationsIcon fontSize="large" />
                <ArrowDropDownCircleIcon alt="Account" fontSize="large" />
            </div>
        </div>
    );
}

export default Header;