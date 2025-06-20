import { useParams } from "react-router-dom";
import useAxios from "./useAxios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const BlogDetails = () => {

    const {id}=useParams()
    const {data:blog,error,isPending}=useAxios('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleDelete=()=>{
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return (  
        <div className="blogDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-[30px] text-[#f1356d] mb-[10px] font-urbanist  font-bold">{blog.title}</h2>
                    <p> Written by: {blog.author}</p>
                    <div className="mx-20px">{blog.body}</div>
                    <button onClick={handleDelete} className="bg-[#f1356d] text-[#fff] border-0 p-[8px] rounded-[8px] cursor-pointer ">Delete Blog</button>
                </article>
            )}
        </div>
    );
}

 
export default BlogDetails;