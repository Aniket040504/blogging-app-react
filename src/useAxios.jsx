import { useEffect, useState } from "react";
import axios from 'axios';

const useAxios= (url)=>{

    const [data,setData]=useState(null)
    const [isPending, setIsPending]=useState(true)
    const [error,setError]=useState(null);

     useEffect(()=>{
      
          const abortCont=new AbortController();
          const fetchBlogs=async()=>{
            try{
            const response=await axios.get(url, {signal: abortCont.signal});
            setData(response.data);
          setIsPending(false); 
          }
          catch(err){
            if(err.name==='AbortError'){
              console.log('fetch aborted');
            }
            else{
              setIsPending(false);
            setError(err.message);
            }
          } 
        } 
        fetchBlogs();
        return()=>abortCont.abort();
          
        },[url]);

        return {data,error,isPending}
}

export default useAxios;