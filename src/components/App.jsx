import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';

// import React, { useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ContactsView from './ContactsView';
import HomeView from './HomeView';
import Register from './Register';
import Login from './Login';
import HeaderAppBar from './AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const App = () => {
  return (
    <section className="section">
      <HeaderAppBar />
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
      </Routes>
      <ToastContainer />
    </section>
  );
};
