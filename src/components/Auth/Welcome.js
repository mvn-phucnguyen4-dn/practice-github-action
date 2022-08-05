import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__title">Welcome to FatFish Community</h2>
      <p className="welcome__slogan">
        <Link to="/">FatFish</Link> is a community of amazing NodeJS developer
      </p>
    </div>
  )
}

export default Welcome
