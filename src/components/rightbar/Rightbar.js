import React from 'react'
import './Rightbar.css'
import { Users } from '../../dummyUserData'
import Online from '../online/Online'

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return (
      <>
        {/* start birthday notification */}
        <div className="birthdayContainer">
          <img src="/assets/gift.png"
            alt="friends birthday"
            className="birthdayImage" />

          <span className="birthdayText"> <b>Oplrtanos</b> and <b>2 more freinds</b> have a birthday today</span>

        </div>
        {/* end birthday notification */}

        {/* start ads section */}
        <img src="assets/fbad.jpg" alt="ads"
          className="adImage" />
        {/* end ad section */}

        {/* start chat list */}
        <h4 className="rightbarChatTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(user => (
            <Online key={user.id} user={user} />
          ))}
        </ul>

        {/* end chat list */}
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="profileRightbarTitle">User Information</h4>
        {/* start info */}
        <div className="profileRightbarInfo">
          {/* start Info item */}
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">City : </span>
            <span className="profileRightbarInfoValue">{user.city}</span>
          </div>
          {/* end Info item */}
          {/* start Info item */}
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Hobby : </span>
            <span className="profileRightbarInfoValue">{user.from}</span>
          </div>
          {/* end Info item */}
          {/* start Info item */}
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Status : </span>
            <span className="profileRightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                  ? "Married"
                  : ""} </span>
          </div>
          {/* end Info item */}
        </div>

        {/* end info */}


        {/* start friends */}
        <h4 className="profileRightbarTitle">Friends list</h4>
        <div className="profileRightbarFollowings">
          {/* start following */}
          <div className="profileRightbarFollowing">
            <img
              src={PF + "people/person_3.jpg"}
              alt=""
              className="profileRightbarFollowingImage"
            />
            <span className="profileRightbarFollowingName">
              Tjfdsp eort
            </span>
          </div>
          {/* end following */}
          {/* start following */}
          <div className="profileRightbarFollowing">
            <img
              src={PF + "people/person_5.jpg"}
              alt=""
              className="profileRightbarFollowingImage"
            />
            <span className="profileRightbarFollowingName">
              Tjfdsp eort
            </span>
          </div>
          {/* end following */}
          {/* start following */}
          <div className="profileRightbarFollowing">
            <img
              src={PF + "people/person_2.jpg"}
              alt=""
              className="profileRightbarFollowingImage"
            />
            <span className="profileRightbarFollowingName">
              Tjfdsp mnp
            </span>
          </div>
          {/* end following */}
        </div>
        {/* end friends */}
      </>
    )
  }
  return (
    <div className="rightbar" >
      <div className="rightbarWrapper">
        {user
          ? <ProfileRightbar />
          : <HomeRightbar />
        }
      </div>
    </div>
  )
}

export default Rightbar
