import React from 'react'
import "../input.css";
import "./css/post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BarChartIcon from '@mui/icons-material/BarChart';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({name,username,post,Verified,avatar,postimage}) {
  return (
    <>
    <div className="post">
    <div className="post-head m-4 flex items-center gap-1">
    <div className="post-avatar">
        <img src={avatar} alt="m" />
    </div>
    <div className="post-name  flex flex-wrap items-center gap-1">
        <p className="name font-bold">{name}</p>
        <div className="bagde">{Verified?<VerifiedIcon/>:null}</div>
        <p className="user-name">@{username}</p>
        
    </div>
    </div>
        <div className="post-content m-4">
            {post}
        </div>
        <div className="post-image">
            {postimage?<img src={postimage} alt="k" /> :null}
        </div>
        <div className="post-icons m-4 flex justify-around">
            <ModeCommentIcon className='icon'/>
            <FavoriteBorderIcon className='icon'/>
            <BarChartIcon className='icon'/>
            <IosShareIcon className='icon'/>
        </div>
    </div>
    </>
  )
}

export default Post