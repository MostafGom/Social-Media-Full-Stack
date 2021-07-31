import React, { useContext, useEffect, useState } from 'react'
import { MoreVert } from '@material-ui/icons'
import './Post.css'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Post({ post }) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const [likes, setLikes] = useState(post.likes.length)
  const [user, setUser] = useState({})
  const [isLiked, setIsLiked] = useState(false)
  const { user: currentuser } = useContext(AuthContext)

  useEffect(() => {
    setIsLiked(post.likes.includes(currentuser._id))
  }, [currentuser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`)
      setUser(response.data);
    }
    fetchUser()
  }, [post.userId])



  const handleLike = () => {
    try {
      axios.put('/posts/' + post._id + '/likes', { userId: currentuser._id })

    } catch (error) {
      console.log(error);
    }
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post" >
      {/* start wrapper */}
      <div className="postWrapper">
        {/* start post top */}
        <div className="postTop">
          {/* start top left */}
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`} >
              <img src={user.profilePicture
                ? user.username === currentuser.username
                  ? PF + "people/" + user.profilePicture
                  : PF + user.profilePicture
                : PF + 'default_avatar.png'}
                alt="post-author"
                className="postProfileImage" />
            </Link>

            <div className="postInfo">
              <span className="postUsername">
                {user.username}
              </span>
              <span className="postDate">{format(post.createdAt)} </span>
            </div>
          </div>
          {/* end top left */}

          {/* start top right */}
          <div className="postTopRight">
            <MoreVert />
          </div>
          {/* end top right */}

        </div>
        {/* end post top */}


        {/* start post center */}
        <div className="postCenter">
          <span className="postCenterContent">
            {post?.desc}
          </span>
          <img src={post.img && PF + `posts/${post.img}`} alt="postpic" className="postCenterImage" />
        </div>
        {/* end post center */}

        {/* start post bottom */}
        <div className="postBottom">
          {/* start bottom left */}
          <div className="postBottomLeft">
            <img src={PF + "like3.png"} alt="" className="postLikeIcons" onClick={handleLike} />
            <img src={PF +
              "love.png"} alt="" className="postLikeIcons" onClick={handleLike} />
            <span className="postLikeCounter">{likes} Like this</span>
          </div>
          {/* end bottom left */}


          {/* start bottom right */}
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
          {/* end bottom right */}

        </div>
        <span style={{ color: "cadetblue", marginLeft: "5px", fontSize: "12px" }} >
          {isLiked ? "you like this" : ""}
        </span>
        {/* end post bottom */}

      </div>
    </div>
  )
}

export default Post
