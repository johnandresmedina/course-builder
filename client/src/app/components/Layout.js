import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import CourseModalContainer from '../../modal/containers/CourseModalContainer';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Course Builder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/'>
                  <DropdownItem>Home</DropdownItem>
                </Link>
                <Link to='/courses'>
                  <DropdownItem>Courses</DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink target='_blank' href='https://github.com/johnandresmedina/course-builder'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <CourseModalContainer />
      <Container fluid>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
