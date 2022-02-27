import React from 'react'
import './Posting.css'

const ServicesPosting2 = ({ ServicesPosts }) => {
    for (let i in ServicesPosts) {
        if (ServicesPosts[i].id === 2) {
            return (
                <div className='postings'>
                    <div className='posting-name'>
                        <h1>{ServicesPosts[i].name}</h1>
                    </div>
                    <div>
                        <img className='posting-image'
                            src={ServicesPosts[i].image}
                            alt={ServicesPosts[i].name} />
                    </div>
                    <div className='posting-description'>
                        {ServicesPosts[i].description}
                    </div>
                    <div className='posting-contact'>
                        <h3>Contact {ServicesPosts[i].contact}</h3>
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

export default ServicesPosting2;