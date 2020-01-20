import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar ,Col} from "react-bootstrap";
import logo from './logo4.png';
import { FaFacebookSquare,FaTwitterSquare,FaLine,FaGooglePlusSquare,FaInstagram } from "react-icons/fa";
import { Container, Divider, Grid, Header, List, Segment,} from 'semantic-ui-react'

export default class Footer extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
      <Segment style={{ margin: '0em 0em 0em', padding: '2em 0em' }}>
        <Container >
          <Grid  stackable className="justify-content-md-center">
            <Grid.Column width={3}>
              <img src={logo} alt="Logo" />
            </Grid.Column>
            <Grid.Column width={5}>
            <Header  as='h2' content='About' />
              <List link >
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Report problems</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4} textAlign='center'>
              <Header  as='h2' content='Follow Us' />
               <FaFacebookSquare size='2em'/>
               <FaInstagram size='2em'/>
               <FaTwitterSquare size='2em'/>
               <FaLine size='2em'/>
               <FaGooglePlusSquare size='2em'/>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
    );
  }
}