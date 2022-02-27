import React from 'react'
import './Posting.css'

const CommunityPosting2 = ({ CommunityPosts }) => {
    for (let i in CommunityPosts) {
        if (CommunityPosts[i].id === 2) {
            return (
                <div className='postings'>
                    <div className='posting-name'>
                        <h1>{CommunityPosts[i].name}</h1>
                    </div>
                    <div>
                        <img className='posting-image'
                            src={CommunityPosts[i].image}
                            alt={CommunityPosts[i].name} />
                    </div>
                    <div className='posting-description'>
                        {CommunityPosts[i].description}
                    </div>
                    <div className='posting-contact'>
                        <h3>Contact {CommunityPosts[i].contact}</h3>
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

export default CommunityPosting2;