import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import NewBlog from './NewBlog';
import Blogs from './Blogs';




function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{

    fetch("/blogs")
    .then(resp => resp.json())
    .then(data => setBlogs(data))

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        Bens Blog 
        <Link to="/blogs/new">Create New Blog!</Link>
        <Link to="/blogs">See the Blogs!</Link>
      </header>
      <main>
        <Routes>
          <Route 
          element={<NewBlog blogs={blogs} setBlogs={setBlogs}/>}
          path="/blogs/new" >
            </Route>
          <Route 
          element={<Blogs blogs={blogs} />}
          path="/blogs" >
            </Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
