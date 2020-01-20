import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from 'react-bootstrap';
import { login } from './UserFunctions';
import { withRouter } from 'react-router-dom';



export class Login extends Component{
    constructor(){
      super();
      this.state = {
        username: '',
        password: '',
        validated: false,
        errors: {}
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
      const form = e.currentTarget;
      
      e.preventDefault()
  
      const user = {
        username: this.state.username,
        password: this.state.password
      }
      console.log(user);
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }else{
        login(user).then(res => {
          if (res) {
            this.props.history.push(`/profile`);
            console.log("Login suscess");
          }else{
            console.log("Login fail");
            
          }
        })
      }
      
    }

    

    render(){

    

      return (   
          <Modal
            {...this.props}
            //size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row">
          <div className="col-md-8 mt-2 mx-auto">
            <Form noValidate validated={this.validated} onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-group">
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                            <Form.Control 
                                required
                                placeholder="username" 
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                            <Form.Control 
                                required
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                    </Form.Group>
                </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </Form>
          </div>
        </div>
          </Modal.Body>
          <Modal.Footer>
            Don't have an account?
            <Button href="/register" variant="link" >Sign Up</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
export default withRouter(Login);