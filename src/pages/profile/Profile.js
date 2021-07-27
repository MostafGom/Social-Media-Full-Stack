import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"


function Profile() {
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
              <img src="/assets/cover.jpg"
                alt=""
                className="profileCoverImage"
              />
              <img src="/assets/people/person_1.jpg"
                alt=""
                className="profileUserImage"
              />
            </div>
            {/* end profile cover */}

            {/* start profile info */}
            <div className="profileInfo">
              <h4 className="profileInfoName">Jdoio rnlwo</h4>
              <span className="profileInfoDesc">
                Lorem ipsum dolor sit.
              </span>
            </div>
            {/* end profile info */}
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
          {/* end profile right */}

        </div>
      </div>
    </>
  )
}

export default Profile
