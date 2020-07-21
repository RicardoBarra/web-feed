import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Timeout from 'await-timeout'

export default function ArticleList() {
  const [show_comments, set_show_comments] = useState(false) 
  const [posts, set_posts] = useState([])

  useEffect(() => {
    async function waitForATimer() {
      
      await axios.get("https://jsonplaceholder.typicode.com/post/1/comments")
        .then(res => {
          set_posts(res.data)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
    waitForATimer();
  }, []);

  const comment_section = posts ? posts.map(post => {
    return(
        <div key={post.id}>
            <li key={post}>
               {post.body}  {''}
            </li>
        </div>
    )
}) : 'Loading...'
 
  return (
     <div>
       <p>Here's a lovely list of articles, for your reading pleasure:</p>
        <button onClick={() => set_show_comments(!show_comments)}>Post</button> {''}
         {show_comments ? comment_section : null}    
     </div>
  )
}