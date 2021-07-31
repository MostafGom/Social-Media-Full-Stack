import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@material-ui/icons'
import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './Share.css'

function Share() {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const desc = useRef()
  const [file, setFile] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }
    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name
      console.log(fileName);
      data.append("name", fileName)
      data.append("file", file)
      newPost.img = fileName
      console.log(newPost);

      try {
        await axios.post('/upload', data)
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post('/posts', newPost)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="share" >
      <div className="shareWrapper">
        {/* start share top */}
        <div className="shareTop">
          <img
            src={user.profilePicture ? PF + `people/${user.profilePicture}` : PF + 'default_avatar.png'}
            alt="profilePic"
            className="shareProfileImage"
          />
          <input
            placeholder={"what's in your mind " + user.username + " ?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        {/* end share top */}
        <hr className="shareHr" />

        {file && (
          <div className="shareImageContainer">
            <img className="shareImage" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImage" onClick={() => setFile(null)} />
          </div>
        )}


        {/* start share bottom */}

        <form className="shareBottom" onSubmit={handleSubmit}>
          {/* start share options */}
          <div className="shareOptions">
            {/* Phot or Video */}
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor='tomato' className="shareOptionIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input type="file"
                name="file"
                encType="multipart/form-data"
                id="file"
                style={{ display: "none" }}
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>


            {/* Tag someone */}
            <div className="shareOption">
              <Label htmlColor='lightblue' className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>

            {/* Location */}
            <div className="shareOption">
              <Room htmlColor='green' className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>


            {/* Emojis */}
            <div className="shareOption">
              <EmojiEmotions htmlColor='gold' className="shareOptionIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>


          </div>
          {/* end share options */}

          <button type='submit' className="shareButton" >Share</button>
        </form>

      </div>
    </div>
  )
}

export default Share
