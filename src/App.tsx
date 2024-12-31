import './App.css'
import jsonData from '../data.json'
import { DataType } from './types'
import Comment from './components/Comment'
import { CommentType } from './types'

function App() {
  const data: DataType = jsonData; 
  const comments: CommentType[] = data.comments; 

  const Comments: JSX.Element[] = comments.map((comment: CommentType) => 
       <Comment key={comment.id} comment={comment} />
     );
  return (
    <>
    <main className='container'>
      {Comments}
    </main>
    </>
  )
}

export default App
