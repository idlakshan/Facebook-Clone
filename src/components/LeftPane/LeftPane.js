import React from 'react'
import './leftPane.css'
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CampaignIcon from '@mui/icons-material/Campaign';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import FlagIcon from '@mui/icons-material/Flag';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
         <div className="leftPaneContainer">
          <div className="leftPaneMenu">
            <li className="leftPaneMenuItem">
                 <GroupIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Friends</span>
            </li>
            <li className="leftPaneMenuItem">
                 <BusinessCenterIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Feeds</span>
            </li>
            <li className="leftPaneMenuItem">
                 <GroupsIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Groups</span>
            </li>
            <li className="leftPaneMenuItem">
                 <StoreIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Marketplace</span>
            </li>
            <li className="leftPaneMenuItem">
                 <VideoLibraryIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Video</span>
            </li>
            <li className="leftPaneMenuItem">
                 <CampaignIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Ad Center</span>
            </li>
            <li className="leftPaneMenuItem">
                 <LeaderboardIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Ads Manager</span>
            </li>
            <li className="leftPaneMenuItem">
                 <BloodtypeIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Blood Donation</span>
            </li>
            <li className="leftPaneMenuItem">
                 <ThermostatIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Climate Science Center</span>
            </li>
            <li className="leftPaneMenuItem">
                 <FlagIcon className='leftPaneMenuIcon'/>
                 <span className="leftPaneMenuText">Pages</span>
            </li>

            <hr/>

             <div className="pagesYouLiked">
                 <h3>Your shortcuts</h3>
             </div>
               
               <div className="pageList">
               <li className="pageListItem">
               <img src="/images/2.jpg" alt="" className="pagePic" />
               <span className="pageName">Gentle Giants Sri Lanka - American Bully</span>
             </li>

             <li className="pageListItem">
               <img src="/images/3.jpg" alt="" className="pagePic" />
               <span className="pageName">Panadura Api</span>
             </li>

             <li className="pageListItem">
               <img src="/images/4.jpeg" alt="" className="pagePic" />
               <span className="pageName">SL Cricket Fans</span>
             </li>

             <li className="pageListItem">
               <img src="/images/5.png" alt="" className="pagePic" />
               <span className="pageName">Java With Dimuthu</span>
             </li>

             <li className="pageListItem">
               <img src="/images/6.png" alt="" className="pagePic" />
               <span className="pageName">HTML Friends</span>
             </li>

             <li className="pageListItem">
               <img src="/images/7.jpg" alt="" className="pagePic" />
               <span className="pageName">Vios Club</span>
             </li>
               </div>
            
            </div>
         </div>

    </div>
  )
}
