// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Project from './pages/Projects';
import ForgotPassword from './pages/ForgotPassword';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/Login'
          element={<Login />}
        />
        <Route
          path='/Sign-up'
          element={<SignUp />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        />
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
            element={<Project />}
          />
          <Route
            path='users'
            element={<Users />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
