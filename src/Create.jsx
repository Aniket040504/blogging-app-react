import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create=()=>{
    const[title,setTitle]=useState('');
     const[body,setBody]=useState('');
      const[author,setAuthor]=useState('');
      const[isPending,setPending]=useState(false);
      const history=useHistory();

      const handleSubmit= (e)=>{
        e.preventDefault()
        const blog={title,body,author};
        setPending(true);
        fetch('http://localhost:8000/blogs', {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
            setPending(false);
            // history.go(-1);
            history.push('/');
        })
      }
    
    return (
        <div className="create max-w-[400px] mx-0 my-auto text-center">
            <h2 className="text-[30px] text-[#f1356d] mb-7 font-bold">Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="block text-left ml-[10px] font-semibold pb-3">Blog Title</label>
                <input type='text' className="border rounded p-2 w-[100%] px-2 py-3 mx-3 my-0 border-1 border-solid border-[#ddd] border-box block  hover:border-red-500"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label className="block ml-[10px] font-semibold text-left pb-3 pt-3" >Blog Body:</label>
                <textarea 
                required 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                className="border border-gray-300 rounded p-2  w-[100%] px-2 py-3 mx-3 my-0 border-1 border-solid border-box block hover:border-red-500" />
                <label className="block text-left ml-[10px] font-semibold pb-3 pt-3">Blog Author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)} className="w-[100%] px-2 py-3 mx-3 my-0 border border-solid border-[#ddd] border-box block  hover:border-red-500">
                    <option  value="mario">Mario</option>
                    <option  value="mar">Mar</option>
                    <option  value="io">io</option>
                </select>
                <div className="p-5 new">
               { !isPending && <button className="bg-[#f1356d] border-0 p-3 rounded-[8px] cursor-wait">Add Blog</button>}
               { isPending && <button disabled className="bg-[#f1356d] border-0 p-3 rounded-[8px] cursor-wait">Adding Blog...</button>}
               
                </div>
                
            </form>
        </div>
    )
}

export default Create;