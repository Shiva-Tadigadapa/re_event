import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateNew from './pages/CreateNew';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'sonner';
import EventPage from './pages/EventPage';
import EventConfrom from './pages/EventConfrom';
import ManageEvent from './pages/ManageEvent';
import Footer from './components/Footer';
import Explore from './pages/Explore';
import Checkin from './components/Manage/Checkin/Checkin';
import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.withCredentials = true;


function App() {
  const location = useLocation();

  const hideNavbar = ['/manage/','/create'];
  const shouldHideNavbar = hideNavbar.some((path) => location.pathname.includes(path));
  const hideFooter = ['/checkin'];
  const shouldHideFooter = hideFooter.some((path) => location.pathname.includes(path));

  return (
    <>
      <div className="w-full flex flex-col">
        {!shouldHideNavbar ? <Navbar/> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNew width={"75%"}  saveName={"Create Event"}  mt={'15%'}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/e/:id" element={<EventPage />} />
          <Route path="/create/conform" element={<EventConfrom />} />
          <Route path="/manage/:id" element={<ManageEvent />} />
          <Route path="/manage/:id/checkin" element={<Checkin />} />
          <Route path="/e/:id" element={<EventPage/>} />
          <Route path="/manage/:id" element={<ManageEvent/>} />
          <Route path="/explore" element={<Explore/>} />

        </Routes>
        <Toaster position="top-center" />
      </div>
      {!shouldHideFooter ? <Footer/> : null}
    </>
  );
}

export default App;
