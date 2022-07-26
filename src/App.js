import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import VideoListing from './pages/VideoListing/VideoListing';
import History from './pages/History/History';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='app_content'>
        <SideBar />

        {/* SideBar */}
        {/* <VideoListing /> */}
        <Routes>
          <Route path='/' element={<VideoListing />} />
          <Route path='/history' element={<History />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
