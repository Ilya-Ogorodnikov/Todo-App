import { FC } from 'react';
import { NavButton } from '..';
import { navLinks } from '../../constants';
import './style.scss'

const Header: FC = () => (
  <header className="header">
    <div className="header__title">
      <h1>Todo App</h1>
    </div>

    <div className="header__links">
      {
        navLinks.map(link =>
          <NavButton
            key={link.id}
            path={link.path}
            title={link.title}
          />
        )
      }
    </div>
  </header>
)

export default Header