import React from 'react';
import Blog from './Blog';

const Blogs = ({blogs}) => {

    const blogsToRender = blogs.map(blog => <Blog key={blog.id} blog={blog}/> )
  return (
    <div>
        <h1>Blogs</h1>
        <div>{blogsToRender}</div>
        


    </div>

  )
}

export default Blogs