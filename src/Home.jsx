import {useState, useEffect, use } from "react";
import BlogList from "./BlogList";
import axios from 'axios';

const Home = () => {

    const [blogs,setblogs]=useState(null)
    const [isPending, setIsPending]=useState(true)
    const [error,setError]=useState(null);
    
    useEffect(()=>{
      const fetchBlogs=async()=>{
        try{
        const response=await axios.get('http://localhost:8000/blogs');
        console.log(response);
        setblogs(response.data);
      console.log('api hit')
      setIsPending(false); 
      }
      catch(err){
        setError(err.message);
      }
    }
    fetchBlogs();
      
    },[]);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading...</div>}
           { blogs && <BlogList blogs={blogs} title='All Blogs!'/>}   
          
        </div>
      );
}

export default Home;