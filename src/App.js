import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import VideoListing from './pages/VideoListing/VideoListing';
import Playlist from './pages/Playlist/Playlist';
import Liked from './pages/Liked/Liked';
import WatchLater from './pages/WatchLater/WatchLater';
import History from './pages/History/History';
import VideoViewer from './pages/VideoViewer/VideoViewer';

import { useState } from 'react';
import Login from './pages/Login/Login';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

function App() {

  
  const app = initializeApp(firebaseConfig);
  console.log(app)
  // const [sideBarTab, setSideBarTab] = useState('Home');
  const [drawer, setDrawer] = useState(false);

  return (
    <div className='App'>
      <HashRouter>
        <NavBar setDrawer={setDrawer} />
        <div className='app_content'>
          <SideBar drawer={drawer} />
          <Routes>
            <Route path='/' element={<VideoListing />} />
            <Route path='/video/:videoId' element={<VideoViewer />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/watchlater' element={<WatchLater />} />
            <Route path='/history' element={<History />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
