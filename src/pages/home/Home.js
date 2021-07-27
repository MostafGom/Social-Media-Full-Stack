import React from 'react'
import './Home.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar className="homeSidebar" />
        <Feed className="homeFeed" />
        <Rightbar className="homeRightbar" />
      </div>
    </>
  )
}

export default Home
