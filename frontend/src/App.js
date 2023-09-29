import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/userSlice';
import { updateSettings } from './redux/settingsSlice';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Messages from './components/Messages';
import Friends from './components/Friends';
import Schedule from './components/Schedule';
import Settings from './components/Settings';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  // Temporary "test" user for development; delete when auth is set up
  useEffect(() => {
    const testUser = {
      id: 0,
      username: "UnoriginalTestUsername",
      nativeLanguage: "French",
      learningLanguage: "English"
    };

    const testSettings = {
      fontSize: 1,
      letterSpacing: 1,
      wordSpacing: 1,
      lineHeight: "normal",
      isOpenDyslexic: false

    };

    dispatch(updateUser(testUser));
    dispatch(updateSettings(testSettings));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
          <Route path="user/:user_id/dashboard" element={<Dashboard />} />
          <Route path="user/:user_id/courses" element={<Courses />} />
          <Route path="user/:user_id/messages" element={<Messages />} />
          <Route path="user/:user_id/friends" element={<Friends />} />
          <Route path="user/:user_id/schedule" element={<Schedule />} />
          <Route path="user/:user_id/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
