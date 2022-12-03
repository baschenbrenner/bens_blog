import React from 'react'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


const NewBlog = ({blogs, setBlogs}) => {
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState(null)
    const [document, setDocument] = useState(null)


    let navigate = useNavigate()

    function handlePictureChange(e){
        if (e.target.files[0]) setPicture( e.target.files[0] )
    }
    function handleDocumentChange(e){
        if (e.target.files[0]) setDocument( e.target.files[0] )
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
        formData.append("document", document)

        console.log(formData)
        const configObj = {
            method: "POST",
            body: formData
          }
        if (title && picture && document){
            
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
            Title:<br/>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="stuff" name="title" id="title"/><br/>
            Picture: <br/>
            <input onChange={handlePictureChange} type="file" accept="image/png, image/jpeg"/><br/>
            Blog File:<br/>
            <input onChange={handleDocumentChange} type="file" accept="application/msword, application/pdf"/><br/>
            <input type="submit" onClick={handleSubmit}/>
        </form>

    </div>
  )
}

export default NewBlog