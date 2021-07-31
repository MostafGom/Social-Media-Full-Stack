import React, { useContext } from 'react'
import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Topbar() {
  const { user, dispatch } = useContext(AuthContext)

  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: user })
  }
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
          <Link to="/login" style={{ textDecoration: "none" }} >
            <span onClick={handleLogout} className="topbarLink">Log out </span>
          </Link>
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
        <Link to={`/profile/${user.username}`} >
          <img src={user.profilePicture ? PF + `people/${user.profilePicture}` : PF + 'default_avatar.png'} alt="person" className="topbarImage" />
        </Link>
      </div>

    </div>
  )
}

export default Topbar
