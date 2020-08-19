import React from "react";

import {
  Navbar,
  Nav,
} from "react-bootstrap";

class Menu extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/jobs">Spring Batch Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/jobs">Jobs</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Menu;
