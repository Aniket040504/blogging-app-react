const Navbar = () => {
    return (  
        <nav className="w-full px-4 flex justify-between items-center border-b gap-10 border-[#f2f2f2]">
        <h1 className=" text-[#f1356d] text-4xl font-bold">The Dojo Blog</h1>
        <div className="flex gap-10 space-x-4 text-2xl text-gray-800 links">
            <a href="/" className="no-underline  hover:text-[#f1356d]" >Home</a>
            <a href="/" className=" no-underline hover:text-[#f1356d]">New Blog</a>
        </div>
    </nav> 
    );
}
 
export default Navbar;