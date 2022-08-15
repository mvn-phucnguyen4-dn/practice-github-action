import React, { useContext, useEffect, useState } from 'react'
import 'antd/dist/antd.min.css'
import { Col, Row } from 'antd'
import TopicHeader from '../../components/Topic/TopicHeader/TopicHeader'
import TopicBody from '../../components/Topic/TopicBody/TopicBody'
import './Topic.css'
import useHttpClient from '../../hooks/useHttpClient'
import { AuthContext } from '../../context/auth'
import { useParams } from 'react-router-dom'

function Quiz() {
  const { sendReq, setError } = useHttpClient()
  const [data, setData] = useState()
  const { currentUser } = useContext(AuthContext)
  const { topicId } = useParams()

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await sendReq(
          `${process.env.REACT_APP_BASE_URL}/topics/${topicId}`,
          'GET',
          null,
          {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
        )

        if (response) {
          setData(response.data)
        }
      } catch (error) {
        setError(error.message)
      }
    }
    currentUser && fetchTopics()
  }, [sendReq, topicId])

  return (
    <>
      <Row>
        <Col xs={0} sm={3} xl={5}></Col>
        <Col xs={24} sm={18} xl={14}>
          {data && (
            <>
              <TopicHeader topic={data} />
              <TopicBody sections={data.sections} />
            </>
          )}
        </Col>
        <Col xs={0} sm={3} xl={5}></Col>
      </Row>
    </>
  )
}

export default Quiz
