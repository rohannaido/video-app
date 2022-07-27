import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import VideoListing from './pages/VideoListing/VideoListing';
import History from './pages/History/History';
import { useState } from 'react';
import VideoViewer from './pages/VideoViewer/VideoViewer';
import WatchLater from './pages/WatchLater/WatchLater';

function App() {

  // const [sideBarTab, setSideBarTab] = useState('Home');
  const [drawer, setDrawer] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar setDrawer={setDrawer} />
        <div className='app_content'>
          <SideBar drawer={drawer} />
          <Routes>
            <Route path='/' element={<VideoListing />} />
            <Route path='/history' element={<History />} />
            <Route path='/video/:videoId' element={<VideoViewer />} />
            <Route path='/watchlater' element={<WatchLater />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
