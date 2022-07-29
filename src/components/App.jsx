import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import React, { Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
// import ContactsView from './ContactsView';
// import HomeView from './HomeView';
// import Register from './Register';
// import Login from './Login';
// import NotFoundPage from './NotFound';
import HeaderAppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomeView = lazy(() => import('./HomeView/HomeView'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const ContactsView = lazy(() => import('./ContactsView/ContactsView'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <section className="section">
      <HeaderAppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute path="/">
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute path="/register" redirectTo="/contacts" restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </section>
  );
};
