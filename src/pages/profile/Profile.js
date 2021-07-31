import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"
import { useParams } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

function Profile() {

  const [user, setUser] = useState({})
  const { user: currentuser } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const username = useParams().username

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`)
      setUser(response.data);
    }
    fetchUser()
  }, [user])


  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Sidebar />
        {/* start profile right */}
        <div className="profileRight">
          <div className="profileRightTop">
            {/* start profile cover */}
            <div className="profileCover">
              <img src={user.coverPicture ? PF + "/cover.jpg" : PF + "/cover.jpg"}
                alt=""
                className="profileCoverImage"
              />
              <img src={user.profilePicture
                ? user.username === currentuser.username
                  ? PF + "people/" + user.profilePicture
                  : PF + user.profilePicture
                : PF + 'default_avatar.png'}
                alt=""
                className="profileUserImage"
              />
            </div>
            {/* end profile cover */}

            {/* start profile info */}
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">
                {user.desc}
              </span>
            </div>
            {/* end profile info */}
          </div>

          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
          {/* end profile right */}

        </div>
      </div>
    </>
  )
}

export default Profile
