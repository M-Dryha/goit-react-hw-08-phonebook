import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from './../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to={redirectTo} /> : children;
}
