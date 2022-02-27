import React from 'react'
import CommunityCards from '../../Cards/CommunityCards/CommunityCards'
import Posting1 from '../../Posting/CommunityPosts/CommunityPosting1'
import Posting2 from '../../Posting/CommunityPosts/CommunityPosting2'
import Posting3 from '../../Posting/CommunityPosts/CommunityPosting3'
import { Route, Routes } from 'react-router-dom' 

const CommunityRouting = ({CommunityPosts}) => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<CommunityCards CommunityPosts={CommunityPosts}/>}/>
                <Route path='/Posting1' element={<Posting1 CommunityPosts={CommunityPosts}/>}/>
                <Route path='/Posting2' element={<Posting2 CommunityPosts={CommunityPosts}/>}/>
                <Route path='/Posting3' element={<Posting3 CommunityPosts={CommunityPosts}/>}/>
            </Routes>
        </div>
    )
}

export default CommunityRouting;