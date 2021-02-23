import { useState } from 'react';

import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { NavBar } from './navbar';

import './style.scss';
export const Header = (event) => {
  const [classname, setClassname] = useState('');
  const rotateBtn = (event) => {
    if (classname !== '') {
      setClassname('');
    } else {
      setClassname('rotate-btn');
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <h1 className="primary-title">Eya Mignardise</h1>
          <h3 className="secondary-title">PÂTISSERIE TUNISIENNE</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classname}
          onClick={rotateBtn}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Chercher"
              className="mr-sm-2"
            />
            <button className="magnifier">
              <img src="loupe.png" alt="loupe" className="magnifier__img" />
            </button>
            <a className="lien-compte" href="#mon compte">
              Mon compte
            </a>
            <a className="lien-liste" href="#maliste de course">
              Ma liste de courses
            </a>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <NavBar />
    </>
  );
};
