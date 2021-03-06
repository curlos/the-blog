import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import UserContext from '../../contexts/UserContext'
import Skeleton from '../skeleton/Skeleton'
import './SmallPost.css'

const SmallPost = ({postID, category, paginatedPosts}) => {

  const { loggedInUser, setLoggedInUser } = React.useContext(UserContext)
  const [postInfo, setPostInfo] = useState({post: {}, author: {}})
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sendingAPIRequest, setSendingAPIRequest] = useState(false)

  const { post, author } = postInfo

  useEffect(() => {
    setImageError(false)
    setIsLoading(true)
    console.log('rerender small post')
    console.log(imageError)
    
    const fetchFromAPI = async () => {
      const postResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/post/${postID}`)
      const authorResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/user/${postResponse.data.author}`)
      setPostInfo({post: postResponse.data, author: authorResponse.data})
      setIsLoading(false)
    }

    fetchFromAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postID, category, paginatedPosts])

  const handleLikePost = async () => {
    try {
      setSendingAPIRequest(true)

      if (Object.keys(loggedInUser).length === 0) {
        return
      }

      const body = { userID: loggedInUser._id}
      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/post/like/${post._id}`, body)

      setPostInfo({...postInfo, post: response.data.updatedPost})
      setLoggedInUser(response.data.updatedUser)
      setSendingAPIRequest(false)
    } catch (err) {
      setSendingAPIRequest(false)
      console.log(err)
    }

  }

  const handleDislikePost = async () => {

    try {
      setSendingAPIRequest(true)

      if (Object.keys(loggedInUser).length === 0) {
        return
      }
  
      const body = { userID: loggedInUser._id}
      const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/post/dislike/${post._id}`, body)
  
      setPostInfo({...postInfo, post: response.data.updatedPost})
      setLoggedInUser(response.data.updatedUser)
      setSendingAPIRequest(false)
      
    } catch (err) {
      console.log(err)
      setSendingAPIRequest(false)
    }
  }

  return (

    <div>
      {isLoading ? <Skeleton type="smallPost" /> : (
        <div className="smallPostContainer">
          <div className="postVotes">
            <div><i className={`fas fa-thumbs-up ${sendingAPIRequest && 'animate-pulse'} ${Object.keys(loggedInUser).length > 0 && loggedInUser.likedPosts && loggedInUser.likedPosts.includes(post._id) ? 'liked' : null}`} onClick={handleLikePost}></i></div>
            <div className="postVotesNum">{(post.likes && post.dislikes && post.likes.length - post.dislikes.length) || 0}</div>
            <div><i className={`fas fa-thumbs-down ${sendingAPIRequest && 'animate-pulse'} ${Object.keys(loggedInUser).length > 0 && loggedInUser.dislikedPosts && loggedInUser.dislikedPosts.includes(post._id) ? 'disliked' : null}`} onClick={handleDislikePost}></i></div>
          </div>
    
          <Link to={`/post/${post._id}`} className="linkPostContainer">
            {post.headerImage && !imageError ? (
              <div className="imageContainer">
                <img src={process.env.REACT_APP_SERVER_URL + post.headerImage} alt={post.title} onError={() => setImageError(true)}/>
              </div>
            ) : null}
    
            <div className="smallPostInfo">
              <div>
                <div className="smallPostTitle">{post.title}</div>
              </div>
    
              <div className="additionalInfo">
                <span>by {author.firstName} {author.lastName}</span>
                <span>{moment(post.createdAt).format('MMMM Do, YYYY')}</span>
                <Link to={`/post/${post._id}#postCommentSection`} className="smallPostCommentContent"><i class="far fa-comment"></i>{post.comments.length}</Link>
              </div>
            </div>
          </Link>
          
        </div>
      )}
    </div>
    
  )
}

export default SmallPost;