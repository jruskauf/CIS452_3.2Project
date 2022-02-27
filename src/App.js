import Navbar from './components/front/Navbar/Navbar'
import data from './components/back/Data'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/front/Routing/Routing'

function App() {
  const { posts } = data
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing posts={posts} />
      </BrowserRouter>
    </div>
  );
}

export default App;
