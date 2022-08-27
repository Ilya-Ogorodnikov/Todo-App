import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INavButtonProps } from '../../../models';
import './style.scss';

const NavButton:FC<INavButtonProps> = ({ title, path }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <div className= {location.pathname === path ? "nav__title-current-box" : "nav__title-box"}>
        <p>
          {title}
        </p>
      </div>
    </Link>
  )
}

export default NavButton