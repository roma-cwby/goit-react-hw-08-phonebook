import propTypes from 'prop-types';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Header>Header</Header>
      <Outlet />
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string,
};
