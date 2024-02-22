import React from 'react';
import Sidebaroptions from './Sidebaroptions';
import "./css/Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "../input.css"

function Sidebar() {
  return (
    <><div className="sidebar">
    <TwitterIcon className='twitter-icon'/>
    <Sidebaroptions active Icons={HomeIcon} Text="home"/>
    <Sidebaroptions Icons={SearchIcon} Text="explore"/>
    <Sidebaroptions Icons={NotificationsIcon} Text="notification"/>
    <Sidebaroptions Icons={MailIcon} Text="messages"/>
    <Sidebaroptions Icons={BookmarkIcon} Text="bookmarks"/>
    <Sidebaroptions Icons={ListIcon} Text="lists"/>
    <Sidebaroptions Icons={PermIdentityIcon} Text="profile"/>
    <Sidebaroptions Icons={MoreHorizIcon} Text="more"/>
    <button className='side-btn p-2 mt-3 mx-2 capitalize font-bold outline-1'>tweet</button>
    </div></>
  )
}

export default Sidebar