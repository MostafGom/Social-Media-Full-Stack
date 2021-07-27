import React from 'react'
import './Sidebar.css'
import { Bookmark, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, WorkOutline } from '@material-ui/icons'
import { Users } from '../../dummyUserData'
import CloseFriend from '../closeFriend/CloseFriend'


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* feed icon */}
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          {/* video icon */}
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          {/* group icon */}
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">groups</span>
          </li>
          {/* jobs icon */}
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">jobs</span>
          </li>
          {/* event icon */}
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">events</span>
          </li>
          {/* bookmark icon */}
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">bookmark</span>
          </li>
          {/* help icon */}
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">help</span>
          </li>

        </ul>

        <button className="sidebarButton">Show more </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(user => (
            <CloseFriend key={user.id} user={user} />
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
