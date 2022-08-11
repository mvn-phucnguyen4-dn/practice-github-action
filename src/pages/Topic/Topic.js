import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.min.css'
import { Col, Row } from 'antd'
import TopicHeader from '../../components/Topic/TopicHeader/TopicHeader'
import TopicBody from '../../components/Topic/TopicBody/TopicBody'
import './Topic.css'

const fakeData = {
  data: {
    id: 1,
    title: 'Test Basic',
    userId: 1,
    isPrivate: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into elecenturies, but also the leap into electronic typesetting, remaining essentially unchanged',
    hashtags: [
      {
        id: 1,
        title: 'docker',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 2,
        title: 'javascript',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 3,
        title: 'php',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 4,
        title: 'daylamothashtagratchiladai',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 5,
        title: 'ruby',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 6,
        title: 'python',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 7,
        title: 'docker',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 8,
        title: 'javascript',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 9,
        title: 'php',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 10,
        title: 'zebra',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 11,
        title: 'ruby',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 12,
        title: 'python',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 13,
        title: 'docker',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 14,
        title: 'javascript',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 15,
        title: 'php',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 16,
        title: 'daylamothashtagratchiladai',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 17,
        title: 'ruby',
        iconUrl: 'https:/localhost:3000',
      },
      {
        id: 18,
        title: 'python',
        iconUrl: 'https:/localhost:3000',
      },
    ],
    sections: [
      {
        id: 1,
        topicId: 1,
        title: 'Javascript',
        questions: [
          {
            id: 1,
            type: 'multi_choice',
            title:
              "I'm very happy _____ in VietNam. I really miss being there.",
            image_url: null,
            description: null,
            score: 10,
            is_private: true,
            answers: [
              {
                id: 1,
                questionId: 1,
                answer: 'to live',
              },
              {
                id: 2,
                questionId: 1,
                answer: 'to have lived',
              },
              {
                id: 3,
                questionId: 1,
                answer: 'to be lived',
              },
              {
                id: 4,
                questionId: 1,
                answer: 'to be living',
              },
              {
                id: 5,
                questionId: 1,
                answer: 'lived',
              },
            ],
          },
          {
            id: 2,
            type: 'short_answer',
            title: 'Write something about Monstar-lab?',
            image_url: null,
            description: null,
            score: 10,
            is_private: true,
            answers: null,
          },
        ],
      },
      {
        id: 2,
        topicId: 1,
        title: 'php',
        questions: [
          {
            id: 1,
            type: 'multi_choice',
            title: "They didn't reach an agreement ______ their differences.",
            image_url: null,
            description: null,
            score: 10,
            is_private: true,
            answers: [
              {
                id: 1,
                questionId: 1,
                answer: 'on account of',
              },
              {
                id: 2,
                questionId: 1,
                answer: 'due',
              },
              {
                id: 3,
                questionId: 1,
                answer: 'because',
              },
              {
                id: 4,
                questionId: 1,
                answer: 'owing',
              },
            ],
          },
          {
            id: 2,
            type: 'short_answer',
            title: 'Are you stupid?',
            image_url: null,
            description: null,
            score: 10,
            is_private: true,
            answers: null,
          },
        ],
      },
    ],
  },
  meta: {
    message: 'success',
  },
}

function Quiz({ topicId }) {
  const [data, setData] = useState(fakeData)

  // get API
  // const getTopic = async () => {
  //   try {
  //     const response = await sendReq(
  //       `${process.env.REACT_APP_BASE_URL}/topic/${topicId}`,
  //       'GET',
  //       null,
  //       {
  //         'Content-Type': 'application/json',
  //       },
  //     )
  //     if (response) {
  //       setData(response)
  //     }
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  // useEffect(() => {
  //   getTopic()
  // }, [])

  return (
    <>
      <Row>
        <Col xs={0} sm={3} xl={5}></Col>
        <Col xs={24} sm={18} xl={14}>
          <TopicHeader topic={data.data} />
          <TopicBody sections={data.data.sections} />
        </Col>
        <Col xs={0} sm={3} xl={5}></Col>
      </Row>
    </>
  )
}

export default Quiz
