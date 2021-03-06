import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import CommentContainer from '../comment_container/CommentContainer';
import Skeleton from '../skeleton/Skeleton';
import './Comment.css';


const Comment = ({ post, commentObj, commentID, replyComment }) => {

  const history = useHistory()
  const { loggedInUser, setLoggedInUser} = React.useContext(UserContext)

  const [commentInfo, setCommentInfo] = useState({comment: {}, author: {}})
  const [replies, setReplies] = useState({})
  const [loading, setLoading] = useState(true)
  const [showReply, setShowReply] = useState(false)
  const { comment, author } = commentInfo
  const [sendingAPIRequest, setSendingAPIRequest] = useState(false)
  

  useEffect(() => {
    const fetchFromAPI = async () => {

      if (!commentObj) {
        const commentResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments/comment/${commentID}`)
        const authorResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/user/${commentResponse.data.author}`)
        setCommentInfo({comment: commentResponse.data, author: authorResponse.data})
      } else {
        const authorResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/user/${commentObj.author}`)
        setCommentInfo({comment: commentObj, author: authorResponse.data})
      }
  
      setLoading(false)
    }

    fetchFromAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replies])

  const handleLikeComment = async () => {
    try {
      setSendingAPIRequest(true)

      if (Object.keys(loggedInUser).length === 0) {
        history.push('/login')
        return
      }

      const body = { userID: loggedInUser._id}
      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/comments/comment/like/${comment._id}`, body)

      setCommentInfo({...commentInfo, comment: response.data.updatedComment})
      setLoggedInUser(response.data.updatedUser)
      setSendingAPIRequest(false)
    } catch (err) {
      setSendingAPIRequest(false)
    }

  }

  const handleDislikeComment = async () => {
    try {
      setSendingAPIRequest(true)

      if (Object.keys(loggedInUser).length === 0) {
        history.push('/login')
        return
      }
  
      const body = { userID: loggedInUser._id }
      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/comments/comment/dislike/${comment._id}`, body)
  
      setCommentInfo({...commentInfo, comment: response.data.updatedComment})
      setLoggedInUser(response.data.updatedUser)
      setSendingAPIRequest(false)
      
    } catch (err) {
      console.log(err)
      setSendingAPIRequest(false)
    }

  }

  return (
    <div>

      {loading ? (comment.replyingTo ? <Skeleton type='commentReply' /> : <Skeleton type='comment' />) : (
        comment.replyingTo && !replyComment ? null :
        <div className={`commentContainer ${replyComment ? 'replyComment' : ''}`}>
          <div className="topCommentInfo">
            {author.profilePic ? (
              <img src={process.env.REACT_APP_SERVER_URL + author.profilePic} alt={`${author.firstName} ${author.lastName} Profile Pic`} className="profilePicImageSmall"/>
            ) : <img src={process.env.REACT_APP_SERVER_URL + 'default_user.jpeg'} alt={`${author.firstName} ${author.lastName} Profile Pic`} className="profilePicImageSmall"/>}
            <Link to={`/author/${author._id}`} className="commentAuthor">{author.firstName} {author.lastName}</Link>
            <span className="fromNowTime">{moment(comment.createdAt).fromNow()}</span>
            <span className="commentLikes">{comment.likes.length - comment.dislikes.length} {(comment.likes.length - comment.dislikes.length) === 1 || (comment.likes.length - comment.dislikes.length) === -1 ? 'like' : 'likes'}</span>
          </div>
          
          <div className="commentContent">
            {comment.content}
          </div>

          <div className="commentActions">
            <span>
              <i className={`fas fa-thumbs-up ${sendingAPIRequest && 'animate-pulse'} ${Object.keys(loggedInUser).length > 0 && loggedInUser.likedComments && loggedInUser.likedComments.includes(comment._id) ? 'liked' : null}`} onClick={handleLikeComment}></i>
              <span className="commentUpvotes">{comment.likes.length - comment.dislikes.length}</span>
              <i className={`fas fa-thumbs-down ${sendingAPIRequest && 'animate-pulse'} ${Object.keys(loggedInUser).length > 0 && loggedInUser.dislikedComments && loggedInUser.dislikedComments.includes(comment._id) ? 'disliked' : null}`} onClick={handleDislikeComment}></i>
            </span>
            <span>
              <i class="fas fa-reply" onClick={() => setShowReply(true)}></i>
            </span>
          </div>
          

          <CommentContainer post={post} parentComment={commentInfo} showReply={showReply} setShowReply={setShowReply} setReplies={setReplies}/>

          {comment.replies.map((commentID) => {
            return (
              <Comment post={post} commentID={commentID} replyComment={true}/>
              
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Comment;