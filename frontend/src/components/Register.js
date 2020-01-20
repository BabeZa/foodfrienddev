import React, { Component } from 'react'
import { register } from './UserFunctions'
import { Button, Form,Col,Row,Card} from 'react-bootstrap';
import DatePicker from 'react-datepicker2';
import moment from 'moment';
import Calendar from 'ciqu-react-calendar';
import './Register.css';
import { Container, Divider, Grid, Header, List, Segment,} from 'semantic-ui-react'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      address:'',
      date: '',
      phone: '',
      gender: '',
      value: moment(),
      validated: false,
      errors: {}
      
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
    this.disabledDate = this.disabledDate.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault()

    const newUser = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      date: this.state.value,
      phone: this.state.phone,
      gender: this.state.gender
    }
    console.log(newUser);
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }else{
      register(newUser).then(res => {
        this.props.history.push(`/login`)
      })
    }

    
  }

  onChangeDate = (value, inputValue) => {
    console.log(value.format('YYYY-MM-DD'))
    this.setState({value})
  }

  onOpenChange = (status) => {
    console.log('open status: ' + status)
  }

  disabledDate = (currentDate, inputValue) => {
    return false
  }

  render() {
    const {onChangeDate, onOpenChange, disabledDate} = this
    return (
      <Segment.Group>
        <Container style={{ margin: '0em 0em 0em', padding: '2em 0em' }}>
          <Segment className="col-md-8  mx-auto">
            <Grid className="justify-content-md-center">
          
              <Grid.Column width={8}>
            
            <Form noValidate validated={this.validated} onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              
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
              </Form.Group>

              <Form.Group controlId="formBasicfirstname">
                  <Form.Label>First Name</Form.Label>
                      <Form.Control 
                        required
                        placeholder="FirstName" 
                        type="text"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                      />
              </Form.Group>

              <Form.Group controlId="formBasiclastname">
                  <Form.Label>Last Name</Form.Label>
                      <Form.Control 
                        required
                        placeholder="LastName" 
                        type="text"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                      />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                      <Form.Control 
                        required
                        placeholder="Email" 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
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

              <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                      <Form.Control 
                        required
                        type="phone" 
                        placeholder="Phone" 
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                      />
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                  <Form.Label>Address</Form.Label>
                      <Form.Control 
                        required
                        type="address" 
                        placeholder="Address" 
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}
                      />
              </Form.Group>

              <Form.Group controlId="formBasicDate">
                  <Form.Label>Date of Birth</Form.Label>
                  <Calendar
                    onChange={onChangeDate}
                    value={this.state.value}
                    allowClear={true}
                    disabled={false}
                    placeholder={'please input date'}
                    format={'YYYY-MM-DD'}
                    onOpenChange={onOpenChange}
                    disabledDate={disabledDate}
                  />
              </Form.Group>
              <br/>
              <Form.Group controlId="formBasicDate">
                  <Form.Label>
                    Gender
                  </Form.Label>
                  <Form.Control as="select">
                    <option>Non-binary</option>
                    <option>Female</option>
                    <option>Male</option>
                  </Form.Control>
              </Form.Group>
            
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
              <br/><br/>
            </Form>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container >
      </Segment.Group> 
    )
  }
}

export default Register