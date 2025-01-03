import './App.css'
import jsonData from '../data.json'
import { DataType } from './types'
import Comment from './components/Comment'
import { CommentType } from './types'

function App() {
  const data: DataType = jsonData; 
  const comments: CommentType[] = data.comments; 
  
  const content: JSX.Element[] = comments.map((comment: CommentType) => 
       <Comment key={comment.id} comment={comment} />);

  const handleClick = () => {
    console.log('Add a comment ');
   }

  return (
        <>
          <main className='container'>
            {content}
            <article className="comment-add">
              <textarea name="comment" cols={10} placeholder="Add a comment"></textarea>
              <div>
                <img src={data.currentUser?.image?.webp} alt={data.currentUser?.username} />
                <button onClick={handleClick}>Send</button>
              </div>
            </article>
          </main>
        </>
  )
}

export default App
