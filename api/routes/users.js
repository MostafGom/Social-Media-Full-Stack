const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')


// update user
router.put('/:id', async (req, res) => {
  if (req.body.userID === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        res.status(500).json(error)
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })

      res.status(200).json("Account updated")
    } catch (error) {

      res.status(500).json(error)
    }
  } else {
    res.status(403).json("unauthorized update, you con only update your account")
  }
})


// delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userID === req.params.id || req.body.isAdmin) {

    try {
      const user = await User.findByIdAndDelete(req.params.id)

      res.status(200).json("Account deleted successfully!!")
    } catch (error) {

      res.status(500).json(error)
    }
  } else {
    res.status(403).json("unauthorized access, you can only delete your account")
  }
})

// get user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, updatedAt, ...other } = user._doc
    res.status(200).json(other)
  } catch (error) {
    res.status(500).json(error)
  }
})

// follow user
router.put('/:id/follow', async (req, res) => {
  if (req.body.userID !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userID)

      if (!user.followers.includes(req.body.userID)) {
        await user.updateOne({ $push: { followers: req.body.userID } })
        await currentUser.updateOne({ $push: { followings: req.params.id } })
        res.status(200).json("user has been followed")
      } else {
        res.status(403).json("you already follow this person")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("you can't follow yourself")
  }
})


// unfollow user
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userID !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userID)

      if (user.followers.includes(req.body.userID)) {
        await user.updateOne({ $pull: { followers: req.body.userID } })
        await currentUser.updateOne({ $pull: { followings: req.params.id } })
        res.status(200).json("user has been unfollowed")
      } else {
        res.status(403).json("you already don't follow this person")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("you can't unfollow yourself")
  }
})

module.exports = router