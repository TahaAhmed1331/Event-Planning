import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import History from './pages/History';
import Earnings from './pages/Earnings';
import ProjectInfo from './pages/ProjectInfo';
import ProposalSent from './pages/ProposalSent';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/sign-up'
        element={<SignUp />}
      />
      <Route
        path='/forgot-password'
        element={<ForgotPassword />}
      />

      {/* Protected / Nested Routes */}
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='projects'
          element={<Projects />}
        />
        <Route
          path={`project/:id`}
          element={<ProjectInfo />}
        />
        <Route
          path={`project/sent-proposal/:id`}
          element={<ProposalSent />}
        />
        <Route
          path='chats'
          element={<Chats />}
        />
        <Route
          path='history'
          element={<History />}
        />
        <Route
          path='earnings'
          element={<Earnings />}
        />
        <Route
          path='settings'
          element={<Settings />}
        />
        <Route
          path='profile'
          element={<Profile />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
