import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  margin-bottom: 20px;
  box-shadow: 10px 10px 5px 5px #00000050;

  p {
    margin-right: 20px;
  }
`;

export const HeaderHav = styled(NavLink)`
  font-size: 150%;
  text-decoration: none;
  transition: color 200ms linear;
  color: #000000;
  &:not(:last-of-type) {
    margin-right: 30px;
  }
  &:hover,
  &:focus {
    color: blue;
  }
  &.active {
    color: red;
  }
`;
