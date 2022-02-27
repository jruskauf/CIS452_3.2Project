import Navbar from './components/front/Navbar/Navbar'
import CommunityData from './components/back/Community/Data'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/front/Routing/Routing'
import ServicesData from './components/back/Services/Data';

function App() {
  const { CommunityPosts } = CommunityData
  const { ServicesPosts } = ServicesData
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing CommunityPosts={CommunityPosts} ServicesPosts={ServicesPosts} />
      </BrowserRouter>
    </div>
  );
}

export default App;
