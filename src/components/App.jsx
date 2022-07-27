import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ListContacts from './ListContacts';
import HomeView from './HomeView';
import Register from './Register';
import Login from './Login';
import AppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PrivateRoute';

export const App = () => {
  return (
    <section className="section">
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        /> */}

        {/* <Route
          path="/register"
          element={
            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <HomeView />
            </PublicRoute>
          }
        />  */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ListContacts />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </section>
  );
};
