import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    return (  
        <div className="pt-14 Blog-list">
            <p className="text-3xl font-semibold title"> {title}</p>
            {blogs.map((blog)=>(
                <div className="px-3 py-4 blogPreview mx-[20px] font-thin my-[0px] border-b border-solid border-[#fafafa] hover:shadow-custom font-serif no-underline" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                       <h2 className="text-[20px] font-semibold text-[#f1356d] mb-2">{blog.title}</h2>
                    <p> written by {blog.author} </p>
                    </Link>
                </div> 
            ))}
        </div>
    );
}
 
export default BlogList;