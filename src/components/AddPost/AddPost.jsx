import React from 'react'
import './addPost.css'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="AddPostContainer">
            <div className="addPostTop">
              <img src="/images/1.jpg" alt="" className="addPostPic" />
              <input type="text" className='addPostInput' placeholder='Whats On your mind ?' />
            </div>
            <hr className="addPostHr" />
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                    <VideoCameraFrontIcon htmlColor='red' className='addVideo'/>
                     <span className="addPostOpptionText">Live Video</span>
                    </div>
                    <div className="addPostOption">
                    <InsertPhotoIcon htmlColor='green' className='addPhoto'/>
                     <span className="addPostOpptionText">Photo/Video</span>
                    </div>
                    <div className="addPostOption">
                    <InsertEmoticonIcon htmlColor='orange' className='addFeeling'/>
                     <span className="addPostOpptionText">Feeling/Activity</span>
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}
