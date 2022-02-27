import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

const CommunityCards = ({ CommunityPosts }) => {
    return (
        <div className="cards">
            <div className='locations'>
                <li><button><h2>Create Post</h2></button></li>
                <li><select><option>Nearby CL</option></select></li>
                <li><select><option>Cities</option></select></li>
                <li><select><option>States/Territories</option></select></li>
                <li><select><option>CL Worldwide</option></select></li>
            </div>
            {CommunityPosts.map((post) => (
                <div className='card'>
                    <div>
                        <img className='post-image'
                            src={post.image}
                            alt={post.name} />
                    </div>
                    <div>
                        <h3 className='post-name'>
                            {post.name}
                        </h3>
                    </div>
                    <div className='post-description'>
                        {post.description}
                    </div>
                    <div>
                        <Link to={'/CommunityPosting' + post.id}><button>Contact {post.contact}</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommunityCards;