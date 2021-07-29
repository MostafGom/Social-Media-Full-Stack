import React from 'react'
import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none' }} >
          <span className="topbarLogo">Fakebook</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="topbarSearchbar">
          <Search className="topbarSearchIcon" />
          <input placeholder="search ..." className="topbarSearchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline </span>
        </div>
        {/* right side icons */}
        <div className="topbarIcons">
          {/* person icon */}
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconNotification">1</span>
          </div>
          {/* chat icon */}
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconNotification">1</span>
          </div>
          {/* notification icon */}
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconNotification">1</span>
          </div>
        </div>
        <img src="/assets/people/person_1.jpg" alt="person" className="topbarImage" />
      </div>

    </div>
  )
}

export default Topbar
