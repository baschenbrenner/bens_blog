import React from 'react'

const Blog = ({blog}) => {
    
  return (
    <div>
        <h1>{blog.title}</h1>
        <div><img src={blog.picture_url}/></div>
        



    </div>

  )
}

export default Blog