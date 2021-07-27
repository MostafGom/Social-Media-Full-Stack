import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons'
import './Post.css'
import { Users } from '../../dummyUserData'

function Posts({ post }) {
  const user = Users.filter(user => user.id === post.userId)[0]
  const username = user.username
  const userimg = user.profilePicture

  const [likes, setLikes] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
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
            <img src={userimg}
              alt="post-author"
              className="postProfileImage" />

            <div className="postInfo">
              <span className="postUsername">
                {username}
              </span>
              <span className="postDate">{post.date} </span>
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
          <img src={post.photo} alt="postpic" className="postCenterImage" />
        </div>
        {/* end post center */}

        {/* start post bottom */}
        <div className="postBottom">
          {/* start bottom left */}
          <div className="postBottomLeft">
            <img src="/assets/like3.png" alt="" className="postLikeIcons" onClick={handleLike} />
            <img src="/assets/love.png" alt="" className="postLikeIcons" onClick={handleLike} />
            <span className="postLikeCounter">{likes} Like this</span>
          </div>
          {/* end bottom left */}


          {/* start bottom right */}
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments} comments</span>
          </div>
          {/* end bottom right */}

        </div>
        {/* end post bottom */}

      </div>
    </div>
  )
}

export default Posts
