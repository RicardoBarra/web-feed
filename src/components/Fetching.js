import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Timeout from 'await-timeout'

export default function ArticleList() {
  const [posts, set_posts] = useState([])

  useEffect(() => {
    async function waitForATimer() {
      
      await Timeout.set(2000)
      await axios.get("https://jsonplaceholder.typicode.com/posts")
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

 
  return (
     <div>
       <p>Here's a lovely list of articles, for your reading pleasure:</p>
        <button onClick={() => set_posts([])}>Clear notifications</button> {''}
             {posts ? posts.map(post => {
                  return(
                      <div key={post.id}>
                          <li key={post}>
                             {post.body}  {''}
                          </li>
                      </div>
                  )
              }) : 'Loading...'}
     </div>
  )
}