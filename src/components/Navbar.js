import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: props.mode === 'grey' ? 'grey' : 'black' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: props.mode === 'grey' ? 'black' : 'white' }}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'grey' ? 'black' : 'white' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: props.mode === 'grey' ? 'black' : 'white' }}>About Us</Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'grey' ? 'black' : 'white'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.nmode} Mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

