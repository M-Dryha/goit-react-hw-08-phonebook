import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import React, { Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AuthOperation from './../redux/auth/auth-operation';
import HeaderAppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { authSelectors } from './../redux/auth';

const HomeView = lazy(() => import('./HomeView/HomeView'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const ContactsView = lazy(() => import('./ContactsView/ContactsView'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const getCurrentUser = useSelector(authSelectors.getCurrentUser);

  useEffect(() => {
    dispatch(AuthOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    !getCurrentUser && (
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
    )
  );
};
