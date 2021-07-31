import React, { useContext, useEffect, useState } from 'react'
import './Rightbar.css'
import Online from '../online/Online'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@material-ui/icons'

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
  const { user: currentuser, dispatch } = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentuser.followings.includes(user?.id))

  // useEffect(() => {
  //   setFollowed(currentuser.followings.includes(user?.id))
  // }, [currentuser, user._id])


  useEffect(() => {
    const getFriends = async () => {

      try {
        const friendList = await axios.get("/users/friends/" + user._id)
        setFriends(friendList.data)
      } catch (error) {
        console.log(error);
      }
    }

    getFriends()
  }, [user])


  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, { userId: currentuser._id })
        dispatch({ type: "UNFOLLOW", payload: user._id })
      } else {
        await axios.put(`/users/${user._id}/follow`, { userId: currentuser._id })
        dispatch({ type: "FOLLOW", payload: user._id })
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed)
  }
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
          {friends.map(friend => (
            <Online key={friend._id} user={friend} />
          ))}
        </ul>

        {/* end chat list */}
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        {
          user.username !== currentuser.username && (
            <button className="rightbarFollowButton" onClick={handleFollow} >
              {followed ? "unfollow" : "follow"}
              {followed ? <Remove /> : <Add />}
            </button>
          )
        }
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
          {friends.map(friend => (
            <Link to={`/profile/${friend.username}`} style={{ textDecoration: "none" }}  >
              <div className="profileRightbarFollowing">
                <img
                  src={friend.profilePicture
                    ? PF + friend.profilePicture
                    : PF + "default_avatar.png"}
                  alt=""
                  className="profileRightbarFollowingImage"
                />
                <span className="profileRightbarFollowingName">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
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
