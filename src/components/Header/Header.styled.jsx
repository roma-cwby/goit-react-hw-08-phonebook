import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 10px 0;
`;

export const HeaderHav = styled(NavLink)`
  font-size: 150%;
  text-decoration: none;
  transition: color 200ms linear;
  &:not(:last-of-type) {
    margin-right: 30px;
  }
  &:hover,
  &:focus {
    color: orange;
  }
  &.active {
    color: red;
  }
`;
