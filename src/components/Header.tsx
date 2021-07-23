import React from 'react';
import { Link } from 'gatsby';
import disableScroll from 'disable-scroll';

import config from '../../config';

interface IProps {
  onAction: (event: any, actionType: string) => void;
}

const Header: React.FC<IProps> = ({ onAction = () => {} }) => {
  const handleActionHandler = event => {
    onAction(event, 'about');
    disableScroll.on();
  };

  return (
    <header id="header">
      <h1>
        <Link to="/">
          <strong>{config.heading}</strong> - {config.subHeading}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="#footer"
              onClick={handleActionHandler}
              className="icon fa-info-circle"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
