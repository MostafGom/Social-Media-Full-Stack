import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import React from 'react'
import './Share.css'

function Share() {
  return (
    <div className="share" >
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/people/person_1.jpg" alt="" className="shareProfileImage" />
          <input placeholder="what's in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />

        <form action="">
          <div className="shareBottom">
            <div className="shareOptions">

              <div className="shareOption">
                <PermMedia htmlColor='tomato' className="shareOptionIcon" />
                <span className="shareOptionText">Photo or Video</span>
              </div>



              <div className="shareOption">
                <Label htmlColor='lightblue' className="shareOptionIcon" />
                <span className="shareOptionText">Tag</span>
              </div>


              <div className="shareOption">
                <Room htmlColor='green' className="shareOptionIcon" />
                <span className="shareOptionText">Location</span>
              </div>



              <div className="shareOption">
                <EmojiEmotions htmlColor='gold' className="shareOptionIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>


            </div>

            <button type='submit' className="shareButton" >Share</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Share
