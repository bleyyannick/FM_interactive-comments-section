
import './App.css'
import data from '../data.json'
// import { Comment } from './types'
// import iconDelete from '/images/icon-delete.svg'
// import iconEdit from '/images/icon-edit.svg'
import iconMinus from '/images/icon-minus.svg'
import iconPlus from '/images/icon-plus.svg'
import iconReply from '/images/icon-reply.svg'

function App() {
  const { comments }  = data
  const contentComments: JSX.Element[] = comments.map(comment => {
    return (
      <article key={comment.id}>
        <header className='comment-header'>
          <img src={comment.user.image?.png} alt={comment.user.username} />
          <h2>{comment.user.username}</h2>
          <span>{comment.createdAt}</span>
        </header>
        <div className='comment-content'>
          <p>{comment.content}</p>
        </div>
        <div className='comment-actions'>
            <div className='comment-upvotes'>
              <button>
                <img src={iconPlus} alt={"icon plus"} />
              </button>
                  <p>1</p>
              <button>
                  <img src={iconMinus} alt={"icon minus"} />
              </button>
            </div>
            <div className='comment-reply'>
              <button>
                <img src={iconReply} alt={"icon reply"} />
              </button>
              <span>Reply</span>
            </div>
          </div>
      </article>
    )
  })
  //const replies = comments.map((comment) => comment.replies)
  return (
    <>
    <main className='container'>
      {contentComments}
    </main>
    </>
  )
}

export default App
