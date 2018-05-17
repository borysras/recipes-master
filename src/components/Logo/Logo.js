import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import tomato from '../../assets/images/tomato.png';
import binaryStudio from '../../assets/images/binary-studio.svg';
import './Logo.css';

export default ({ small }) => (
  <Link
    to="/"
    className={classnames('logo', {
      small: small,
    })}
    title="Pomodoro"
  >
    <img className="tomato" src={tomato} alt="tomato" />
    <h1 className="ui header center aligned">Pomodoro</h1>
    <div className="tagline">
      <img className="binary-studio" src={binaryStudio} alt="Binary Studio" />'s recipes app
    </div>
  </Link>
);
