import { useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Register } from 'components/Register/Register';
import { Login } from 'components/Login/Login';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Section />}>
          <Route
            path="register"
            element={
              <PublicRoute component={<Register />} redirectTo="/contacts" />
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute component={<Login />} redirectTo="/contacts" />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
};
