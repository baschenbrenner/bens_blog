import React from 'react'


const Blog = ({blog}) => {
  
    
  return (
    <div>
        <h1>{blog.title}</h1>
        <div><a href={blog.document_url} target="_blank"><img src={blog.picture_url}/></a></div>
        <div>Click Picture to View PDF of Blog in New Tab</div>
          
        



    </div>

  )
}

export default Blog