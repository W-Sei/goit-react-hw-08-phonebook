import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'styles';
import { lazy, useEffect } from 'react';
import { SharedLayout } from 'components/CommonStyles';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Helmet } from 'react-helmet';

const Home = lazy(() => import('../../pages/Home/Home'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phonebook</title>
        <link rel="canonical" href="#" />
        <meta name="description" content="My Phonebook" />
      </Helmet>
      <GlobalStyles />
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />

            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
