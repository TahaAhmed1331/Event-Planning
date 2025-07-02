import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import History from "./pages/History";
import Earnings from "./pages/Earnings";
import ProjectInfo from "./pages/ProjectInfo";
import ProposalSent from "./pages/ProposalSent";
import UnprotectedRoute from "./components/Routes/UnProtectedRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import { ProtectedRoutes, PublicRoutes } from "./constants/routes";
import DetailsInformationForms from "./pages/DetailsInformationForms";
import SignupOnlyRoute from "./components/Routes/SignupOnlyRoute";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path={PublicRoutes.LOGIN}
        element={
          <UnprotectedRoute>
            <Login />
          </UnprotectedRoute>
        }
      />
      <Route
        path={PublicRoutes.SIGN_UP}
        element={
          <UnprotectedRoute>
            <SignUp />
          </UnprotectedRoute>
        }
      />
      <Route
        path={PublicRoutes.FORGOT_PASSWORD}
        element={
          <UnprotectedRoute>
            <ForgotPassword />
          </UnprotectedRoute>
        }
      />
     <Route
  path={PublicRoutes.DETAILS_INFORMATION}
  element={
    <SignupOnlyRoute>
      <DetailsInformationForms />
    </SignupOnlyRoute>
  }
/>
       

      {/* Protected / Nested Routes */}
      <Route path={ProtectedRoutes.HOME} element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
         
        <Route
          path={ProtectedRoutes.ABOUT}
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.PROJECTS}
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.PROJECT_INFO}
          element={
            <ProtectedRoute>
              <ProjectInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.PROJECT_PROPOSAL}
          element={
            <ProtectedRoute>
              <ProposalSent />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.CHATS}
          element={
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.HISTORY}
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.EARNINGS}
          element={
            <ProtectedRoute>
              <Earnings />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.SETTINGS}
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path={ProtectedRoutes.PROFILE}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
