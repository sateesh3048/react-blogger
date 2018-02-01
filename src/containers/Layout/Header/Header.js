import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import {Nav,
  NavItem, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse} from "reactstrap"

export default class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
   this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    return(<header>
      <Navbar   light expand="md" className="bg-secondary">
        <NavbarBrand href="/">Blogger</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/articles" className="nav-link" >
                Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/support"  className="nav-link">
                Support
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>);
  }
}
