import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"


function Profile() {

  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('/users?username=fgtyuj')
      setUser(response.data);
    }
    fetchUser()
  }, [])


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
              <img src={user.coverPicture || PF + "/cover.jpg"}
                alt=""
                className="profileCoverImage"
              />
              <img src={PF + user.profilePicture || PF + "/default_avatar.png"}
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
            <Feed username='fgtyuj' />
            <Rightbar user={user} />
          </div>
          {/* end profile right */}

        </div>
      </div>
    </>
  )
}

export default Profile
