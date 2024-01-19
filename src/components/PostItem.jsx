import React from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, description, authorID, thumbnail}) => {

const shortDescripition = description.length > 100 ? description.substr(0, 100) + "...." : description;
const postTitle = title.length > 30 ? title.substr(0, 30) + "...." : title;

  return (
    <article className='post'>
        <div className='post__thumbainal'>
            <img src={thumbnail} alt={title}/>
        </div>

            <div className='post__content'>
                <Link to={'/posts/${postID}'} >
                    <h3>{postTitle}</h3>
                </Link>
                <p>{shortDescripition}</p>
                <div className='post__footer'>
                    <PostAuthor/>
                    <Link to={'/posts/categories/${category}'} className='btn category'>{category}</Link>
                </div>
            </div>

    </article>
  )
}

export default PostItem