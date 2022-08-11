import { Typography } from 'antd'
import React, { useState } from 'react'
import { BodyInput } from '../../FormElements/BodyInput/BodyInput'
import './ShortAnswer.css'

const { Title } = Typography

function ShortAnswer({ idx, question }) {
  return (
    <>
      <div className="short-answer">
        <Title level={3}>{idx + ', ' + question.title}</Title>
        <BodyInput key="Body" />
      </div>
    </>
  )
}

export default ShortAnswer
