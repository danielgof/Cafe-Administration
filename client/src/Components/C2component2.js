import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => { 
       axios
       .get('http://127.0.0.1:3030/posts') 
       .then(res => {
           console.log(res)
           setPosts(res.data)
       })
       .catch(err => {
           console.log(err)
       })
    }, [])

    return (
        <div>
            <ul>
                {posts.map(posts => (
                    <li key={posts.id}>{posts.body}</li>
                ))}
            </ul>
        </div>
    )
}

export default Datafetching
