import './Post.css'

function Post(props) {
  const { userId, id, title, body } = props

  return (
    <div className="post">
      <small>
        post: {id} user: {userId}
      </small>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  )
}

export default Post
