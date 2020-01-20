import React, { Component, Fragment } from 'react';
import {  Row, Col,Button} from 'reactstrap';
import './Res2.css';
import { IoIosWalk,IoIosStarOutline,IoIosStar } from "react-icons/io";
import boy1 from './boy1.png';
import boy2 from './boy2.png';
import { Comment,Progress,Statistic,Popup, Card, Image, Rating ,Icon,Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react'

export class Res2 extends Component {
    
    render() {
        return (
            <Fragment>
                <br/>
                <Container >
                    <div className="head">
                            <img className="Image" src="https://bigseventravel.com/wp-content/uploads/2019/02/Screenshot-2019-02-18-at-10.56.29.png" alt="1"/>
                        <div className="content">
                            <h3>ร้านอาหารตามสั่งสูตรคุณเด็กหอ<br/></h3>
                            <p>ตามสั่ง,อาหารไทย</p>
                        <div className="Imageroll">
                            <img  src="https://c8.alamy.com/comp/S17WG3/amazing-dishes-of-thai-food-on-a-tablesamut-songkhram-province-thailand-S17WG3.jpg" alt="1"/> 
                            <img  src="https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/global/general_image/other_foods/all/type_of_dishes-alacarte-hero_image-858822.jpg.ulenscale.767x798.jpg" alt="1"/>
                            <img  src="https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/238/presentation_2a0d1be6-b733-40d6-a10c-50c77b8638c8.jpg" alt="1"/>
                            <img  src="https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/global/other_foods/all/regional_dishes-thai_central_dishes-hero_image-858790.jpg.ulenscale.767x798.jpg" alt="1"/>
                            <img  src="http://www.khaomaokhaofang.com/img/upload/aa476985eb9d2033639a43d1f5740e5b.jpg" alt="1"/>
                            <img  src="https://s359.kapook.com/rq/580/435/50/pagebuilder/9b7f0026-deab-40af-b0a8-3470530f9607.jpg" alt="1"/>
                        </div>
                        </div>
                    </div>
                    <div className="Grid">
                      <div>
                    <div className="Index">
                        <div >
                            <h4>เวลาปิดร้าน</h4>
                            <p>จันทร์-ศุกร์ 07.30 - 22.00<br/>เสาร์ 08.30 - 20.00<br/>อาทิตย์ 12.30 - 00.00</p>
                        </div>
                        <div className="lborder">
                            <h4>โปรโมชั่น</h4>
                            <p>สั่งมาม่าผัดวันนี้ ไซส์ จัมโบ้ แถมฟรีชีสยืด</p>
                        </div>
                        <div className="lborder">
                        <h4>ช่องทางติดต่อ</h4>
                        <p>Line:<br/>Facebook:<br/>โทร: 080-1234567</p>
                        </div>
                    </div>
                    <div className="address">
                        <div>
                        <img src="https://image.appdisqus.com/wp-content/uploads/2016/09/google-map.jpg" alt=""/>
                        </div>
                        <div>
                        <p> ที่อยู่: 698/1 ซอย ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140<br/><IoIosWalk/>100 เมตร จาก มจธ.</p>
                        </div>
                    </div>
                    </div>  
                    <div className="room">
                        <div>
                        <h5>ห้อง</h5>
                        <button>+สร้างห้องใหม่</button>
                        </div>
                        <div>
                        <h6>room #1 </h6>
                        <p>2/5 คน</p>
                        <p>เริ่ม 17.30น.</p>
                        <button>เข้าร่วม</button>
                        </div>
                        <div>
                        <h6>room #2 </h6>
                        <p>3/5 คน</p>
                        <p>เริ่ม 18.30น.</p>
                        <button>เข้าร่วม</button>
                        </div>
                        <div>
                        <h6>room #3 </h6>
                        <p>5/5 คน</p>
                        <p>เริ่ม 18.30น.</p>
                        <button>เต็ม</button>
                        </div>
                        <div>
                        <h6>room #4 </h6>
                        <p>4/5 คน</p>
                        <p>เริ่ม 19.30น.</p>
                        <button>เข้าร่วม</button>
                        </div>
                    </div>
                    </div>
                    
                
                <br/> 
                
                    <Grid.Column width={12}>
                        
                        <Segment>
                            <Grid className="justify-content-sm-center">

                            
                                <Grid.Column width={3} textAlign='center' >
                                    
                                        <Statistic size='huge'>
                                            <Statistic.Value>4.2</Statistic.Value>
                                        </Statistic>
                                        <Rating icon='star' defaultRating={4.2} maxRating={5} />
                                        <Statistic size='mini' horizontal>
                                            <Statistic.Value>2,975</Statistic.Value>
                                            <Statistic.Label>Review</Statistic.Label>
                                        </Statistic>
                                    
                                    
                                </Grid.Column >
                                <Grid.Column width={12}>
                                    <div>
                                    <Progress percent={70} color='green' />
                                    </div><div>
                                    <Progress percent={15} color='olive' />
                                    </div><div>
                                    <Progress percent={10} color='yellow' /> 
                                    </div><div>
                                    <Progress percent={3} color='orange' />
                                    </div><div>
                                    <Progress percent={2} color='red' />
                                    </div>
                                    
                                    
                                    
                                </Grid.Column >
                            
                            </Grid>
                            </Segment>    
                   
                        <Segment>
                            <Comment.Group size='massive'>
                                <Header as='h3' dividing>
                                    Comments
                                </Header>

                                <Comment>
                                    <Comment.Avatar as='a' src={boy1} />
                                    <Comment.Content>
                                    <Comment.Author as='a'>Matt</Comment.Author>
                                    <Comment.Metadata>
                                        <span>Today at 5:42PM</span>
                                    </Comment.Metadata>
                                    <Comment.Text>อร่อยมากครับแนะนำให้มาอีก</Comment.Text>
                                    
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar as='a' src={boy2} />
                                    <Comment.Content>
                                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                    <Comment.Metadata>
                                        <span>5 days ago</span>
                                    </Comment.Metadata>
                                    <Comment.Text>Good มาอีกแน่นอนครับ</Comment.Text>
                                
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Segment>

                        <Grid.Column width={12}>
                        <Header size='large'>ร้านใกล้คุณ</Header>
                        <Segment.Group horizontal>
                            <Segment>
                                <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062__340.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>Pizza Kung</Card.Header>
                                            <Card.Meta>
                                                <span>1.3 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                พิซซ่าโฮมเมด หอมอร่อย รับประกัน
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                476 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.5} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://www.matichon.co.th/wp-content/uploads/2018/06/%E0%B8%9B%E0%B8%B9%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%9C%E0%B8%87%E0%B8%81%E0%B8%B0%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B9%88.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>What the crab</Card.Header>
                                            <Card.Meta>
                                                <span>1.5 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                ปูก้อนโต กล้ามใหญ่ สดใหม่
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                321 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.0} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://pbs.twimg.com/media/EBIEh0yUIAAvYKr.jpg' width='200px' height='150px'/>
                                            <Card.Content>
                                            <Card.Header>ปลาสีส้ม</Card.Header>
                                            <Card.Meta>
                                                <span>2.2 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                แซลม่อนสด นำเข้าจากนอร์เว
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                147 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={3.7} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://food.mthai.com/app/uploads/2015/09/noodle007.jpg' width='200px' height='150px'/>
                                            <Card.Content>
                                            <Card.Header>มาม่าแซ่บ</Card.Header>
                                            <Card.Meta>
                                                <span>2.4 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                มาม่าแซ่บ แซ่บซี๊ดจี๊ดถึงใจ มีโปรชั่น
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                292 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.2} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>

                    </Grid.Column>
                </Container>
          </Fragment>
            
            
            
            
            
            
            
        )
    }
}

export default Res2;
