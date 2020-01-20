import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo4.png';
import avatar from './user32.png';
import search from './search.png';
import { Navbar,Button,InputGroup,Col,FormControl, ButtonGroup,DropdownButton,Dropdown} from "react-bootstrap";
import Login from "./Login3.js";





class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      loginShow : false
      
    }
    this.logOut = this.logOut.bind(this)
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  

  render() {
    let loginClose =() => this.setState({loginShow : false});
    const loginRegLink = (
      <ul className="navbar-nav">
        <ButtonGroup>
        <Button variant="outline-primary" href="/register">Sign Up</Button>
        <Button variant="outline-primary" onClick={() => this.setState({loginShow: true})}>Log In</Button>
        </ButtonGroup>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <ButtonGroup style={{ marginLeft: "auto" }}>
        <Button variant="outline-primary" disabled><img src={avatar} alt="Logo" /></Button>
        <DropdownButton variant="outline-primary" as={ButtonGroup} title="Setting" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1" href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={this.logOut.bind(this)}>Log Out</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      
      </ul>
    )

    return (
      <Navbar className="justify-content-md-center" bg="white" variant="white">
        <Col xs lg="3">
          <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
        </Col>
        <Col xs lg="3">
          <InputGroup>
            <FormControl
              placeholder="Search... "
              aria-label="Search..."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary"><img src={search} alt="Logo" /></Button>
            </InputGroup.Append>
        </InputGroup>
        </Col>
        <Col xs lg="3" >
            {localStorage.usertoken ? userLink : loginRegLink}
            
            <Login show={this.state.loginShow} onHide={loginClose}/>
          
        </Col>
        
      </Navbar>
    );
  }
}
export default withRouter(Header)