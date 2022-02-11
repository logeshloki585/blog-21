import React from 'react';
import './List.css';
import  { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";



const List = (cat) => {

    const [post,setpost] = useState([]);

    useEffect(() =>{
        async function fetchdata(){
            const request = await axios.get('https://blog-56.herokuapp.com/a');
            setpost(request.data.blog)
            return request;
        }
        fetchdata();
    },[]);


    return (
        <>
        <div className='list'>
           
            <h1 className="cat">{cat.cat}</h1>
            <div  className='line'></div>
            {post.map((data) => (
                <Link to={`/c/${data.category}/${data._id}`}>
                     <button key={data._id} className="title">{(data.category===cat.cat) && data.title}</button>                   
                </Link>
            ))}    
        </div>
        <div className="moblist">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <h1 className="cat">{cat.cat}</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                {post.map((data) => (
                <Link to={`/c/${data.category}/${data._id}`}>
                     <button key={data._id} className="title">{(data.category===cat.cat) && data.title}</button>                   
                </Link>
            ))} 
                </div>
                </div>
            </div>
            </nav>
            </div>  
        
        </>
    )
}

export default List

