import { CommentType } from '../types'
import iconMinus from '/images/icon-minus.svg'
import iconPlus from '/images/icon-plus.svg'
import iconReply from '/images/icon-reply.svg'

export default function Comment({ comment }: {comment: CommentType }) {
    const replies = comment.replies?.map((reply: CommentType) => 
       <Comment key={reply.id} comment={reply} />
    );
    const handleClick = () => {
        console.log('Replying to:', comment.user.username)
     }
    return ( 
        
    <>
        <article key={comment.id}>
            <header className='comment-header'>
                <img src={comment.user.image?.png} alt={comment.user.username} />
                <h2>{comment.user.username}</h2>
                <span>{comment.createdAt}</span>
            </header>
            <div className='comment-content'>
               <span>{comment.replyingTo ?? ''}</span><p>{comment.content}</p>
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
                <button 
                 className='reply-button'
                 onClick={handleClick}>
                    <img src={iconReply} alt={"icon reply"} />
                    <span>Reply</span>
                </button>
            </div>
          </div>
        </article>
        <div className='comment-replies'>
            {replies}
        </div>
     </>
    )
}

