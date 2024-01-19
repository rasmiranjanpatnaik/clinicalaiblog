import React, { useState } from 'react'
import PostItem from './PostItem' 
import { DUMMY_POSTS } from '../data'




const Posts = () => {
    const [Posts, setpost] = useState (DUMMY_POSTS)
    return (

        <section className='posts'>
        {
           Posts.length > 0 ? <div className='container posts__container'>
                {
                Posts.map(({id, thumbnail, category, title, desc, authorID}) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
                    description={desc} authorID={authorID}
                />)
                }
            </div> : <h2 className='center'>NO POSTS FOUND..... </h2>}
        </section>
    ) 
}

export default Posts