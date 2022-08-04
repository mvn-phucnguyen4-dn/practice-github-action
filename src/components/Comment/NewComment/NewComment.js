import React, { useContext } from 'react'
import { AuthContext } from '../../../context/auth'
import useHttpClient from '../../../hooks/useHttpClient'
import ErrorModal from '../../Modal/ErrorModal'
import CommentForm from './CommentForm'
import { CommentContext } from '../Comments'

export const NewComment = ({ replyId }) => {
  const { setActiveComment, setComments, postId, postAuthor } =
    useContext(CommentContext)
  const { currentUser } = useContext(AuthContext)
  const { sendReq, error, clearError } = useHttpClient()
  const currentUserId = currentUser && currentUser.userId
  const createComment = async (text, parentId = null) => {
    const reqData = {
      parentPost: postId,
      body: text,
      author: currentUserId,
      parentId,
      userId: currentUserId,
    }
    try {
      const newComment = await sendReq(
        `${process.env.REACT_APP_BASE_URL}/comments`,
        'POST',
        JSON.stringify(reqData),
        {
          Authorization: `Bearer ${currentUser.token}`,
          'Content-Type': 'application/json',
        },
      )
      setComments((comments = []) => [newComment.comment, ...comments])
    } catch (err) {}
    setActiveComment(null)
  }
  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      <CommentForm
        avatar={replyId ? false : true}
        handleSubmit={(text) => createComment(text, replyId && replyId)}
        submitLabel={replyId ? 'Reply' : 'Submit'}
        handleCancel={() => setActiveComment(null)}
      />
    </>
  )
}
