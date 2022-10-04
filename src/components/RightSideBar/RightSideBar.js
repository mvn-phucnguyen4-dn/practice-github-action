import React from 'react'
import SkeletonPostList from '../Skeleton/SkeletonPostList'
import './RightSideBar.css'

const RightSideBar = ({ tags, isLoading }) => {
  const newsTag = tags.filter((tag) => tag.name === 'news')[0]
  const discussTag = tags.filter((tag) => tag.name === 'discuss')[0]
  const webdevTag = tags.filter((tag) => tag.name === 'webdev')[0]

  return (
    <div className="sidebar sidebar--right">
      {isLoading ? <SkeletonPostList type="mini" /> : <></>}
    </div>
  )
}

export default RightSideBar
