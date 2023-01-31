import { StyledHeader, HeaderHav } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderHav to="/register">Register</HeaderHav>
      <HeaderHav to="/login">Login</HeaderHav>
    </StyledHeader>
  );
};
