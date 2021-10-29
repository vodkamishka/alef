import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ReactLogo } from '../../assets/icons/logo.svg';

import './header.sass';

const Header = () => {
  return (
    <header>
      <ReactLogo />
      <NavLink to="/alef/form-component" activeClassName="selected" className="header_navlink">
        форма
      </NavLink>
      <NavLink to="/alef/preview" activeClassName="selected" className="header_navlink">
        Превью
      </NavLink>
    </header>
  );
};

export default Header;
