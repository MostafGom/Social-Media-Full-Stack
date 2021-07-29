import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './Feed.css'
import axios from 'axios'

function Feed({ username }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get('/posts/profile/' + username)
        : await axios.get('/posts/timeline/61014ac6a2eb253fbc1a7138')

      setPosts(response.data);
    }
    fetchPosts()
  }, [])


  return (
    <div className="feed" >
      <div className="feedWrapper">
        <Share />

        {posts.map(post => (
          <Post key={post._id} post={post} />

        ))}

      </div>
    </div>
  )
}

export default Feed
