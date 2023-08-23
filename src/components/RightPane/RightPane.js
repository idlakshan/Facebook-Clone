import React from 'react'
import './rightPane.css'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
         <div className="adContainer">
                 <span className='sponsered'>Sponsered</span>
                 <img className='adImg' src="/images/ad.png" alt="" />
                 <span className='adText'>FaceBook Clone</span>
         </div>

         <div className="bContain">
          <hr className='line' />
         <span className='bday'>Birthdays</span>
         <div className="birthdayContainer">
          <img className='bImg' src="/images/cake.png" alt="" />
          <span className='bText'> <b>Dimuthu lakshan</b> and <b>2 others</b> having birthday today</span>
         </div>
         </div>
        
         
         <div className='bContain'>
         <hr className='line' />
         <span className='bday'>Contacts</span>
           <div className="list">
           <div className="friendList">
          <li className='online'>
            <div className="onlineFriendImgContainer">
              <img src="/images/1.jpg" alt="" className="onlineImg" />
              <span className='onlineStatus'></span>
            </div>
            <span className="onlineFriendname">Kasun Umayanga</span>
          </li>
         </div>

         <div className="friendList">
          <li className='online'>
            <div className="onlineFriendImgContainer">
              <img src="/images/1.jpg" alt="" className="onlineImg" />
              <span className='onlineStatus'></span>
            </div>
            <span className="onlineFriendname">Kasun Umayanga</span>
          </li>
         </div>


         <div className="friendList">
          <li className='online'>
            <div className="onlineFriendImgContainer">
              <img src="/images/1.jpg" alt="" className="onlineImg" />
              <span className='onlineStatus'></span>
            </div>
            <span className="onlineFriendname">Kasun Umayanga</span>
          </li>
         </div>



         <div className="friendList">
          <li className='online'>
            <div className="onlineFriendImgContainer">
              <img src="/images/1.jpg" alt="" className="onlineImg" />
              <span className='onlineStatus'></span>
            </div>
            <span className="onlineFriendname">Kasun Umayanga</span>
          </li>
         </div>



         <div className="friendList">
          <li className='online'>
            <div className="onlineFriendImgContainer">
              <img src="/images/1.jpg" alt="" className="onlineImg" />
              <span className='onlineStatus'></span>
            </div>
            <span className="onlineFriendname">Kasun Umayanga</span>
          </li>
         </div>
           </div>
       
         </div>
            
        
      </div>
    </div>
  )
}
