import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar className="navbar p-2">
    <ul className="container-fluid">
      <Container fluid>
        <Navbar>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand p-2" href="#">
            <Image src="https://beliftlab.com/static/images/common/logo2.png" width="37px" height="42px" />
            BE:LIFT
          </a>
          <Nav.Link className="p-3">ABOUT</Nav.Link>
          <Nav.Link className="p-3">ENHYPEN</Nav.Link>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Nav.Link className="p-3">I'LL-IT</Nav.Link>
          <Nav.Link className="p-3">AUDITION</Nav.Link>
        </Navbar>
      </Container>
    </ul>

    <ul className="navbar navbar-expand-sm">
      <Nav.Link className="p-3">KOR</Nav.Link>
      <Nav.Link className="p-3">ENG</Nav.Link>
      <Nav.Link className="p-3">JPN</Nav.Link>
      <Nav.Link className="p-3">CHN</Nav.Link>
    </ul>
  </Navbar>
);

export default TopMenu;
