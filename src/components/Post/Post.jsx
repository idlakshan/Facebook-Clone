import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                 <img src="/images/4.jpeg" alt="" className="postImge" />
                 <span className="postUsername">Sri Lanka Cricket</span>
                 <span className="postTime">4 min</span>
            </div>
            <div className="postCenter">
              <div className="postCaption">
              A Test match to be played at SSC after 1702 Days (almost 5 years) 
                Last Test: SL 🇱🇰 v Eng 🏴󠁧󠁢󠁥󠁮󠁧󠁿 (2018 Nov)
              </div>

              <img src="/images/8.jpg" alt="" className="postedImg" />
            </div>
            <div className="postBottom">
                 <div className="postBottomLeft">
                    <img src="/images/like.png" alt="" className="imgReaction" />
                    <img src="/images/love.png" alt="" className="imgReaction" />
                    <img src="/images/wow.png" alt="" className="imgReaction" />
                    <span className="likeCount"> Dimuthu and 3.5K others</span>
                 </div>
                 <div className="postBottomRight">
                    <span className="commentsCout">2.5K comments</span>
                    <span className="sharesCout">269 shares</span>
                 </div>
            </div>
            <hr className='sectionHr'/>
            <div className="bottomSection">
                <span className="like">Like</span>
                <span className="comment">Comment</span>
                <span className="share">Share</span>
            </div>
        </div>
    </div>
  )
}
