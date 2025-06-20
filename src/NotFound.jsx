import { Link } from "react-router";

const NotFound = () => {
    return (  
        <div className="notfound">
            <h2>Sorry</h2>
            <p>Page cannot be found</p>
            <Link to='/'>Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;