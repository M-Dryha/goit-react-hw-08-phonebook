import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ListContacts from './ListContacts';
import Navigate from './Navigate';
import HomeView from './HomeView';
import Register from './Register';
import Login from './Login';
import AppBar from './AppBar';
// import Filter from './Filter';

export const App = () => {
  return (
    <section className="section">
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* <Route path="/" element={<HomeView />} /> */}
        {/* <Route path="/form" element={<ContactForm />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<ListContacts />} />
      </Routes>
      <ToastContainer />
    </section>
  );
};
