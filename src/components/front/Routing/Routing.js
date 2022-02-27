import React from 'react'
import CommunityCards from '../Cards/CommunityCards/CommunityCards'
import CommunityPosting1 from '../Posting/CommunityPosts/CommunityPosting1'
import CommunityPosting2 from '../Posting/CommunityPosts/CommunityPosting2'
import CommunityPosting3 from '../Posting/CommunityPosts/CommunityPosting3'
import ServicesCards from '../Cards/ServicesCards/ServicesCards'
import ServicesPosting1 from '../Posting/ServicesPosts/ServicesPosting1'
import ServicesPosting2 from '../Posting/ServicesPosts/ServicesPosting2'
import ServicesPosting3 from '../Posting/ServicesPosts/ServicesPosting3'
import { Route, Routes } from 'react-router-dom' 

const Routing = ({CommunityPosts, ServicesPosts}) => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<CommunityCards CommunityPosts={CommunityPosts}/>}/>
                <Route path='/CommunityPosting1' element={<CommunityPosting1 CommunityPosts={CommunityPosts}/>}/>
                <Route path='/CommunityPosting2' element={<CommunityPosting2 CommunityPosts={CommunityPosts}/>}/>
                <Route path='/CommunityPosting3' element={<CommunityPosting3 CommunityPosts={CommunityPosts}/>}/>
                <Route path='/Services' element={<ServicesCards ServicesPosts={ServicesPosts}/>}/>
                <Route path='/ServicesPosting1' element={<ServicesPosting1 ServicesPosts={ServicesPosts}/>}/>
                <Route path='/ServicesPosting2' element={<ServicesPosting2 ServicesPosts={ServicesPosts}/>}/>
                <Route path='/ServicesPosting3' element={<ServicesPosting3 ServicesPosts={ServicesPosts}/>}/>
            </Routes>
        </div>
    )
}

export default Routing;