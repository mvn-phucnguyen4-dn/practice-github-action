import React, { useState } from 'react'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import useHttpClient from '../../hooks/useHttpClient'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  const [tags, setTags] = useState([])
  const { sendReq, isLoading } = useHttpClient()

  return (
    <>
      <Banner />
      <div className="container-layout">
        <div className="container-sidebar">
          <LeftSideBar />
        </div>
        <RightSideBar tags={tags} isLoading={isLoading} />
      </div>
    </>
  )
}

export default Home
