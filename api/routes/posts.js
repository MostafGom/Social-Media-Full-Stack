const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json(error)
  }
})


// update post
router.put('/:id', async (req, res) => {
  try {

    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json("post updated successfully")
    } else {
      res.status(403).json("you can only update your post")
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// delete post
router.delete('/:id', async (req, res) => {
  try {

    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json("post deleted successfully")
    } else {
      res.status(403).json("you can only delete your post")
    }
  } catch (error) {
    res.status(500).json(error)
  }
})


// like a post
router.put('/:id/likes', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } })
      res.status(200).json("post is liked")
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } })
      res.status(200).json("post is disliked")

    }
  } catch (error) {
    res.status(500).json(error)
  }
})


// get post

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post.desc)
  } catch (error) {
    res.status(500).json(error)
  }
})

// get timeline of posts

router.get('/timeline/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({ userId: currentUser._id })
    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => (
        Post.find({ userId: friendId })
      ))
    )

    res.status(200).json(userPosts.concat(...friendsPosts))
    // res.status(200).json(friendsPosts)

  } catch (error) {
    res.status(500).json(error)
  }
})




router.get('/profile/:username', async (req, res) => {
  try {
    const currentUser = await User.findOne({ username: req.params.username })
    const userPosts = await Post.find({ userId: currentUser._id })

    res.status(200).json(userPosts)

  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router