import React from 'react'
import './Posting.css'

const Posting = ({ posts }) => {
    for (let i in posts) {
        if (posts[i].id === 1) {
            return (
                <div className='postings'>
                    <div className='posting-name'>
                        <h1>{posts[i].name}</h1>
                    </div>
                    <div>
                        <img className='posting-image'
                            src={posts[i].image}
                            alt={posts[i].name} />
                    </div>
                    <div className='posting-description'>
                        {posts[i].description}
                    </div>
                    <div className='posting-contact'>
                        <h3>Contact {posts[i].contact}</h3>
                        <textarea rows="5" cols="40" name="message">
                            Enter message here
                        </textarea>
                    </div>
                    <button>Submit</button>
                </div>
            );
        }
    }
}

export default Posting;