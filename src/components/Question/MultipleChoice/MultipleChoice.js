import { Radio, Space, Typography, Checkbox } from 'antd'
import React, { useState } from 'react'
import './MultipleChoice.css'

const { Title } = Typography

function MultipleChoice({ idx, question }) {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  const onChangeCB = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }

  return (
    <>
      <div className="multi-choice">
        <Title level={3}>{idx + ', ' + question.title}</Title>
        {question.answers.length <= 4 ? (
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              {question.answers.map((item) => (
                <Radio className="btn-radio" key={item.id} value={item.answer}>
                  {item.answer}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        ) : (
          <Checkbox.Group
            options={question.answers.map((item) => item.answer)}
            // defaultValue={question.answers[0].answer}
            onChange={onChangeCB}
          />
        )}
      </div>
    </>
  )
}

export default MultipleChoice
