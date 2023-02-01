import { StyledHeader, HeaderHav } from './Header.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.user.email);

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return isLoggedIn ? (
    <StyledHeader>
      <p>{email}</p>
      <button type="button" onClick={handleClick}>
        logout
      </button>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <HeaderHav to="/register">Register</HeaderHav>
      <HeaderHav to="/login">Login</HeaderHav>
    </StyledHeader>
  );
};
