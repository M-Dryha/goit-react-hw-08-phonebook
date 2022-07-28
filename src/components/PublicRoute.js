import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelectors } from './../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,
}) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    children
  );
  // if (shouldRedirect) {
  //   return <Navigate to="contacts" state={{ from: location }} replace />;
  // } else {
  //   return children;
  // }
}

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldNavigate = isLoggedIn && restricted;
//   return shouldNavigate ? (
//     <Navigate to={redirectTo} replace={true} />
//   ) : (
//     children
//   );
// }
