import React from 'react'
import Cards from '../Cards/Cards'
import Posting1 from '../Posting/Posting1'
import Posting2 from '../Posting/Posting2'
import Posting3 from '../Posting/Posting3'
import { Route, Routes } from 'react-router-dom' 

const Routing = ({posts}) => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Cards posts={posts}/>}/>
                <Route path='/Posting1' element={<Posting1 posts={posts}/>}/>
                <Route path='/Posting2' element={<Posting2 posts={posts}/>}/>
                <Route path='/Posting3' element={<Posting3 posts={posts}/>}/>
            </Routes>
        </div>
    )
}

export default Routing;