import { useParams } from "react-router-dom";
import useAxios from "./useAxios";


const BlogDetails = () => {

    const {id}=useParams()
    const {data:blog,error,isPending}=useAxios('http://localhost:3000/blogs/'+id);
    return (  
        <div className="blogDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="text-[30px] text-[#f1356d] mb-[10px] font-urbanist  font-bold">{blog.title}</h2>
                    <p> Written by: {blog.author}</p>
                    <div mx-20px>{blog.body}</div>
                </article>
            )}
        </div>
    );
}

 
export default BlogDetails;