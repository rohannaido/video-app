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

import { useEffect, useState } from 'react';
import Login from './pages/Login/Login';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { getCurrUserId } from './firebase/auth'
import { Navigate } from 'react-router-dom'
import SignUp from './pages/Login/SignUp';
import { useSelector } from 'react-redux';

function App() {

  initializeApp(firebaseConfig);
  
  const [drawer, setDrawer] = useState(false);
  const [currUser, setCurrUser] = useState('');
  const displayName = useSelector(state => state.user.value.displayName)

  useEffect(() => {
    const user = getCurrUserId();
    console.log(user);
    if (user) {
      setCurrUser(user)
    }
  },[displayName])
   
  const privatePath = (page) => {
    if(displayName != ''){
      return page;
    }
    return <Navigate to="/login" replace />;
  }

  return (
    <div className='App'>
      <HashRouter>
        <NavBar setDrawer={setDrawer} />
        <div className='app_content'>
          <SideBar drawer={drawer} setDrawer={setDrawer} />
          <Routes>
            <Route path='/' element={<VideoListing />} />
            <Route path='/video/:videoId' element={<VideoViewer />} />

            <Route path='/playlist' element={privatePath(<Playlist />)} />
            <Route path='/liked' element={privatePath(<Liked />)} />
            <Route path='/watchlater' element={privatePath(<WatchLater />)} />
            <Route path='/history' element={privatePath(<History />)} />

            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
