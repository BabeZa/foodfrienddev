import React, { Component, Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import boy1 from './boy1.png';
import boy2 from './boy2.png';
import './Home.css'
import { Comment,Progress,Statistic,Popup, Card, Image, Rating ,Icon,Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react'

export class Home extends Component {
    render() {
        return (
            <Container style={{ margin: '0em 0em 0em', padding: '1em 0em' }}>
                <Grid className="justify-content-md-center">
                
                
                    <Grid.Column width={12}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={p1}
                                alt="First slide"
                                href="/restaurant"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={p2}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={p3}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <Header size='large'>ร้านแนะนำ</Header>
                        <Segment.Group horizontal>
                            <Segment>
                                <Popup
                                    trigger={
                                        <Card
                                        href="/restaurant"
                                        >
                                            <Image  src='https://goodlifeupdate.com/app/uploads/2019/11/%E0%B8%89%E0%B8%B9%E0%B9%88%E0%B8%89%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88-01-768x880.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>Click Here</Card.Header>
                                            <Card.Meta>
                                                <span>6.8 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                อาหารสดสะอาด ราคาเป็นมิตร
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                2975 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.9} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image class="image" src='https://pasusat.com/wp-content/uploads/2016/08/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B4%E0%B8%9A.png' width='200px' height='150px'/>
                                            <Card.Content>
                                            <Card.Header>แซ่บนัว</Card.Header>
                                            <Card.Meta>
                                                <span>7.2 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                ร้านอาหารอีสาน รสชาติพื้นเมือง
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                2796 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.8} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image  src='https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/global/general_image/other_foods/all/type_of_dishes-alacarte-hero_image-858822.jpg.ulenscale.767x798.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>ข้าวคลุกไข่ไก่กุ๊กๆ</Card.Header>
                                            <Card.Meta>
                                                <span>9.8 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                อาหารหลากหลาย รสชาติถูกปาก
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                974 Reviews
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
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://readthecloud.co/wp-content/uploads/2019/04/living-eat-forest-food-7.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>พ่อหมีป่า</Card.Header>
                                            <Card.Meta>
                                                <span>10.4 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                อาหารป่ารสเด็ด เผ็ดยันโลกหน้า
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                1135 Reviews
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

                    <Grid.Column width={12}>
                        <Header size='large'>ร้านยอดนิยม</Header>
                        <Segment.Group horizontal>
                            <Segment>
                                <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://ed.files-media.com/ud/book/content/1/154/459452/cover01-850x567.JPG' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>ปูไข่ ไข่ปู</Card.Header>
                                            <Card.Meta>
                                                <span>6.4 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                ปูสด ไข่เยิ้ม มา 5 จ่าย 4 ด่วนจำนวนจำกัด
                                                
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                1345 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.8} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='http://www.khaomaokhaofang.com/img/upload/aa476985eb9d2033639a43d1f5740e5b.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>ข้าวเม่าข้าวฟ่าง</Card.Header>
                                            <Card.Meta>
                                                <span>7.3 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                ร้านอาหารน่านั่ง อบอุ่น สไตล์ครอบครัว
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                               1132 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.8} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://img.wongnai.com/p/1968x0/2019/04/30/c65e9c2a11014efe82706be87c0463ca.jpg' width='200px' height='150px'/>
                                            <Card.Content>
                                            <Card.Header>Kin Kin shabu</Card.Header>
                                            <Card.Meta>
                                                <span>9.4 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                Kin Kin shabu ร้านชาบูที่อร่อยสุดใน 3 โลก
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                925 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.8} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                            <Segment>
                            <Popup
                                    trigger={
                                        <Card>
                                            <Image src='https://food.mthai.com/app/uploads/2013/06/11.jpg' width='200px' height='150px' />
                                            <Card.Content>
                                            <Card.Header>สเต๊กโฮม</Card.Header>
                                            <Card.Meta>
                                                <span>11.4 km</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                สเต๊กเนื้อ เนื้อนุ่มชุ่มช่ำ อร่อย
                                            </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='star' />
                                                792 Reviews
                                            </a>
                                            </Card.Content>
                                        </Card>
                                    }
                                >
                                    <Popup.Header>Rating</Popup.Header>
                                    <Popup.Content>
                                    <Rating icon='star' defaultRating={4.7} maxRating={5} />
                                    </Popup.Content>
                                </Popup>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>

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
                                    
            

            </Grid>
        </Container>
        )
    }
}

export default Home
