import React from 'react'
import "./CloseFriend.css"
function CloseFriend({ user }) {
  return (

    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="sidebar friend" className="sidebarFriendImage" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend
