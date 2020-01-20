import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import './Profile.css'
import avatar from './user128.png';
import { Container, Divider, Grid, Header, List, Segment} from 'semantic-ui-react'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      date: '',
      phone: '',
      gender: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      username: decoded.username,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      date: decoded.date,
      phone: decoded.phone,
      gender: decoded.gender
    })
  }

  render() {
    return (
      <Segment.Group>
        <Container style={{ margin: '0em 0em 0em', padding: '2em 0em' }}>
          
            <Grid columns={2} className="justify-content-md-center">
          
              <Grid.Column width={3} textAlign='center'>
                <Segment>
                
                  <img src={avatar} alt="Logo" />
                  <Header as='h2'>{this.state.username}</Header>
                </Segment>
              </Grid.Column>
              <Grid.Column width={7}>
                <Segment>
                <Header as='h2' >Name: {this.state.first_name} {this.state.last_name} </Header>
                <Header as='h2' >Age: </Header>
                <br/>
                <Header as='h3' disabled dividing>Contact Information</Header>
                <Header as='h3' >Phone: {this.state.phone} </Header>
                <Header as='h3' >Email: {this.state.email} </Header>
                <Header as='h3' >Address:  </Header>
                <br/>
                <Header as='h3' disabled dividing>Basic Information</Header>
                <Header as='h3' >Birthday: {this.state.date} </Header>
                <Header as='h3' >Gender: {this.state.gender} </Header>
                <br/>
                <br/>
                </Segment>
              </Grid.Column>

            </Grid>
          
        </Container >
      </Segment.Group> 
          
    )
  }
}

export default Profile
