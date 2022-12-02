import React from 'react'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


const NewBlog = ({blogs, setBlogs}) => {
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")


    let navigate = useNavigate()

    function handlePictureChange(e){
        if (e.target.files[0]) setPicture( e.target.files[0] )
    }

    function handleSubmit(e){
        console.log("hey")
        e.preventDefault()
        // const formData = {
        //     title,
        //     picture
        // }
        let formData = new FormData()
        formData.append("picture", picture)
        formData.append("title", title)

        console.log(formData)
        const configObj = {
            method: "POST",
            body: formData
          }
        if (title && picture){
            
            console.log("got in here")
            fetch("/blogs", configObj)
            .then(r=>{
                if (r.ok) {
                    r.json().then(newBlog => setBlogs([...blogs, newBlog]))
                }
                else {
                    console.log(r)
                }
            })
            
        }
        

    }

    console.log(picture)
  return (
    <div>NewBlog
        <form>
            Title:
            <input onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="stuff" name="title" id="title"/>
            Picture:
            <input onChange={handlePictureChange} type="file" accept="image/png, image/jpeg"/>
            <input type="submit" onClick={handleSubmit}/>
        </form>

    </div>
  )
}

export default NewBlog