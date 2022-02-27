import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

const ServicesCards = ({ ServicesPosts }) => {
    return (
        <div className="cards">
            <div className='locations'>
                <button className='create'><h2>Create Post</h2></button>
                <li><select><option>Nearby CL</option></select></li>
                <li><select><option>Cities</option></select></li>
                <li><select><option>States/Territories</option></select></li>
                <li><select><option>CL Worldwide</option></select></li>
            </div>
            {ServicesPosts.map((post) => (
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
                    <div className='post-contact'>
                        <Link to={'/ServicesPosting' + post.id}><button>Contact {post.contact}</button></Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesCards;