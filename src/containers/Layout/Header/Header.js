import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import {Nav,
  NavItem, 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse} from "reactstrap";
  import {connect} from "react-redux";

class Header extends Component {
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
          <Nav navbar className="mr-auto">
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
          {this.props.auth.isLoggedIn
            ? 
            <Nav navbar>
              <NavItem>
                <NavLink to="/logout"  className="nav-link">
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
            :
            <Nav navbar>
              <NavItem>
                <NavLink to="/login"  className="nav-link">
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          }
        </Collapse>
      </Navbar>
    </header>);
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);