import React from 'react';
import './Blog.css';
import  { useEffect, useState }  from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const Blog = () => {

    let  {_id} = useParams();

    const [post,setpost] = useState([]);

    let blogpost =[]

    useEffect(() =>{
        async function fetchdata(){
            const request = await axios.get('https://blog-56.herokuapp.com/a');
            setpost(request.data.blog)
            return request;
        }
        fetchdata();
    },[]);

    post.map((item)=> {
        if(item._id===_id){
            blogpost.unshift(item)
        }
})
    
    return (
       <div className="blog">
           {blogpost.map((item)=>(
                <div className="blog_content">
                               <div key={item.title} className="blog_title">{item.title}</div>
                               <div className="line"></div>

                               <div className="blog_align">
                                    <div className="content">  {item.pass_one}</div>
                                    <img src={item.us_url} alt={item.title} />
                                    <div className="content">{item.pass_two}</div>
                                    <img src={item.s_url} alt={item.title} />
                                    <div className="content">{item.pass_three}</div>
                               </div>
                </div>
           ))}
       </div>
    )
}

export default Blog;
