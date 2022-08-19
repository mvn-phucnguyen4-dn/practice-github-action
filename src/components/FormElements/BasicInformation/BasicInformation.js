import React from 'react'
import './BasicInformation.css'
import TextareaAutosize from 'react-textarea-autosize'
import HashTagInput from '../HashTagInput/HashTagInput'

const BasicInformation = (props) => {
  const { title, description } = props

  const handleChangeTitle = (e) => {
    props.changeTopicTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    props.changeTopicDescription(e.target.value)
  }

  return (
    <>
      <div className="topic-square"></div>
      <div className="basic-informatin">
        <h1>Create a topic</h1>
        <TextareaAutosize
          rows={1}
          className="title-topic"
          value={title}
          autoSize
          onChange={handleChangeTitle}
        />

        <TextareaAutosize
          className="description-topic"
          autoSize
          value={description}
          onChange={handleChangeDescription}
        />
        <HashTagInput
          tags={props.hashtags}
          addTag={props.addTag}
          removeTag={props.removeTag}
        />
      </div>
    </>
  )
}

export default BasicInformation
