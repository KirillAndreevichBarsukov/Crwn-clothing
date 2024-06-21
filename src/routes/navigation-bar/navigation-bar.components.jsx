import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation-bar.styles.scss';

const NavigationBar = () => {
  return (
    <Fragment>
      <div className='navigation-bar'>
        <Link className='logo-container' to='/'>
          <CrwnLogo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-bar-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-bar-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
