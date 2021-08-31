import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import TableChartIcon from '@material-ui/icons/TableChart';
import PersonIcon from '@material-ui/icons/Person';
import ErrorIcon from '@material-ui/icons/Error';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function Sidebar() {
    return (
      
        <div className="sidebar">
            <h2 className="heading-sidebar">Shards Dashboard</h2>
            <hr/>
            <SidebarOption Icon = {AccessAlarmIcon} text = "Home" />

            <SidebarOption Icon = {CreateIcon} text = "Blog Dashboard" />

            <SidebarOption Icon = {AllInboxIcon} text = "Blog Posts" />

            <SidebarOption Icon = {PostAddIcon} text = "Add New Posts" />
            
            <SidebarOption Icon = {FormatAlignCenterIcon} text="Forms and Components"/>  <SidebarOption Icon = {TableChartIcon} text="Tables"/>

           <SidebarOption Icon = {PersonIcon} text="User Profile"/>

            <SidebarOption Icon = {ErrorIcon} text="Errors"/> 



           

           

           

        </div>
    )
}

export default Sidebar
