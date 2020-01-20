import React, { Component, Fragment } from 'react';
import { Container, Row, Col,Button,Progress } from 'reactstrap';
import './Restaurantpage.css';
import { IoIosWalk,IoIosStarOutline,IoIosStar } from "react-icons/io";
import {Segment} from 'semantic-ui-react'


export class Restaurantpage extends Component {
    
    render() {
        return (
            <Fragment>
            <br/>
            <Container>
            <Row>
                
                
            
            <Col lg ="auto"><img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" style={{ width: 200, height: 200 }}/></Col>
            <Col lg="auto"><h3>ร้านอาหารตามสั่งสูตรคุณเด็กหอ</h3>
            <p>ตามสั่ง,อาหารไทย</p>
            <Row>
            <img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            <img src="https://ed.files-media.com/ud/book/content/1/154/459335/Kiew_Kai_Ka.jpg" alt="2" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            <img src="https://ed.files-media.com/ud/book/content/1/154/459335/Kiew_Kai_Ka.jpg" alt="2" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            <img src="https://ed.files-media.com/ud/book/content/1/154/459335/Kiew_Kai_Ka.jpg" alt="2" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            <img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            <img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            <img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" class="img-thumbnail"style={{ width: 114, height: 104 }}/> 
            </Row>
            </Col>
            
            </Row>
            
            </Container>
            <Container>
            <Col lg="auto" className="side">
                <Row>
                    <h5>ห้อง</h5><Button className="button" size="sm" color="success">+สร้างห้องใหม่</Button>{' '}
                </Row>
            <br/>
                <Row>
                    <h5>room #1</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>    
            <br/>
                <Row>
                    <h5>room #2</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>
            <br/>
                <Row>
                    <h5>room #3</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>
                <br/>
                <Row>
                    <h5>room #4</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>
                <br/>
                <Row>
                    <h5>room #5</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>
                <br/>
                <Row>
                    <h5>room #6</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>
                <br/>
                <Row>
                    <h5>room #7</h5> <Button className="button" size="sm" color="success">เข้าร่วม</Button>{' '}
                </Row>
            </Col>
            
          <br/>
            <Row  className="borderwidth"> 
                <Col lg="4">
                    <h5 style={{marginTop: 10}}>เวลาปิดร้าน</h5>
                    <p>จันทร์-ศุกร์ 07.30 - 22.00<br/>เสาร์ 08.30 - 20.00<br/>อาทิตย์ 12.30 - 00.00</p>
                </Col>
                <Col lg="5">
                    <h5 style={{marginTop: 10}}>โปรโมชั่น</h5>
                    <p>สั่งมาม่าผัดวันนี้ ไซส์ จัมโบ้ แถมฟรีชีสยืด</p>
                </Col>
                <Col>
                    <h5 style={{marginTop: 10}}>ช่องทางติดต่อ</h5>
                    <p>Line:<br/>Facebook:<br/>โทร: 080-1234567</p>
                </Col>
            </Row>
            
        <br/>
          <Row className="borderwidth">
                <Col lg = "auto" style={{marginLeft: -15}}><img src="https://image.appdisqus.com/wp-content/uploads/2016/09/google-map.jpg" alt=""style={{ width: 193, height: 183 }}/></Col>
                <Col><p className="font"> ที่อยู่: 698/1 ซอย ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140<br/><IoIosWalk/>100 เมตร จาก มจธ.</p></Col>
          </Row>
          <br/>
          <Row className="borderwidth">
            <Col lg="3">
                <h4 style={{marginTop: 10}}><center>รีวิวร้าน</center></h4>
                <h1><center>4.2</center></h1>
                <center><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarOutline/></center>
             </Col>
             <Col lg="auto">
                <p style={{marginTop: 10}}>5 <br/>4 <br/>3 <br/>2 <br/>1</p>
            </Col>
           <Col>   
                <Progress value="80"color="success"style={{marginTop: 15}}  />
                <Progress value="50"color="success"/>
                <Progress value="30"color="success"/>
                <Progress value="0"color="success"/>
                <Progress value="0"color="success"/>
          </Col>
          </Row>
          
          </Container>
          <br/>  <br/>  
          </Fragment>
            
            
            
            
            
            
            /*<div class="container">
                <div class="row" >
                <div class="col-2"><img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" class="img-thumbnail"style={{ width: 200, height: 200 }}/></div>
                <div class="col-5"><p>ร้านอาหารตามสั่งสูตรคุณเด็กหอ</h3><h3>ตามสั่ง,อาหารไทย<p>
                <div class="row" >
                <div class="col"><img src="https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg" alt="1" class="img-thumbnail"style={{ width: 114, height: 184 }}/></div>
                <div class="col"><img src="https://ed.files-media.com/ud/book/content/1/154/459335/Kiew_Kai_Ka.jpg" alt="2" class="img-thumbnail"style={{ width: 114, height: 184 }}/></div>
                        </div>
                    </div>
                </div>
        </div>*/
        )
    }
}

export default Restaurantpage;
