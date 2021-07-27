import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
import { Posts } from '../../dummyUserData'


function Feed() {
  return (
    <div className="feed" >
      <div className="feedWrapper">
        <Share />

        {Posts.map(post => (
          <Post key={post.id} post={post} />

        ))}

      </div>
    </div>
  )
}

export default Feed
