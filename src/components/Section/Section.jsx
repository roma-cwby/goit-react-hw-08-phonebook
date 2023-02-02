import propTypes from 'prop-types';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Section = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

Section.propTypes = {
  title: propTypes.string,
};
