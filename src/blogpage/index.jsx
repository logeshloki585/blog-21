import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from './Blog/Blog';
import './index.css'
import List from './List/List';


const Blogpage = () => {

        let  {cat} = useParams();

    return (
        <div className='blogpage'>
            
            <List cat={cat}/>
            <Blog/>
        </div>
    )
}

export default Blogpage;
