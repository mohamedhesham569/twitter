import React from 'react'
import "./css/weidgets.css"
import "../input.css";
import SearchIcon from '@mui/icons-material/Search';
import Post from './Post'

function weidgets() {
  return (
    <>
    <div className="weidgets">

        <div className="twitter-search my-4 mx-2">
            <div className="twitter-input flex items-center gap-1">
                <SearchIcon className='search-icon'/>
                <input type="text" className='search-input text-xl' placeholder='search twitter' />
            </div>
        </div>


        <div className="whatishap">
            <div className="header">
                what is happenig?!
            </div>

            <div className="">
                <Post name="fabrizio romano" username="fabrizioRomano" Verified={true}  post="🚨⚪️ Real Madrid fixed salary proposal for Kylian Mbappé is way lower than the one made in summer 2022 — and also lower than current salary.

Real want Mbappé to join the club at their conditions after spending years on this saga.

Contract proposal, already in Kylian’s hands." avatar="https://pbs.twimg.com/profile_images/1741753635158024192/j0m8Ucvv_400x400.jpg" postimage="https://pbs.twimg.com/media/GGZZuJUWQAE6LLK.jpg"/>
                </div>
        </div>
    </div>
    </>
  )
}

export default weidgets