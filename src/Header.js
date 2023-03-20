import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="google.com">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="google.comnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="google.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="google.com">About</a>
        </li>
      </ul>
      {props.searchBar ? < form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: "No search bar"}
    </div>
  </div>
</nav>
    </div>
  )
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}


Header.propTypes ={
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}


export default Header;