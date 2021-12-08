import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (

               <nav className="navbar navbar-dark bg-dark  navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav> 
    )
}

Navbar.propTypes={home:PropTypes.string}
Navbar.defaultProps={home:"default value"}