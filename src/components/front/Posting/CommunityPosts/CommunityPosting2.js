import React from 'react'
import '../Posting.css'

const CommunityPosting2 = ({ CommunityPosts }) => {
    for (let i in CommunityPosts) {
        if (CommunityPosts[i].id === 2) {
            return (
                <div>
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
                    <div className='locations'>
                        <li><button className='create'><h2>Create Post</h2></button></li>
                        <li><select><option>Nearby CL</option></select></li>
                        <li><select><option>Cities</option></select></li>
                        <li><select><option>States/Territories</option></select></li>
                        <li><select><option>CL Worldwide</option></select></li>
                    </div>
                </div>
            );
        }
    }
}

export default CommunityPosting2;