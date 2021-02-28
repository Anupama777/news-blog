import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'


export class Banner extends React.Component{
    render() {
        return (
<div>
<Carousel className="jumbotron" style={{'backgroundColor':"transparent"}}>
  <Carousel.Item style={{'height':"400px"}}>
    <img style={{'height':"400px"}}
      className="d-block w-100"
      src={'assets/img/news4.jpg'}
     
    />
    
  </Carousel.Item>
  <Carousel.Item style={{'height':"400px"}}>
    <img style={{'height':"400px"}}
      className="d-block w-100"
      src={'assets/img/news2.jpg'}
     
    />

  </Carousel.Item>

  <Carousel.Item style={{'height':"400px"}}>
    <img style={{'height':"400px"}}
      className="d-block w-100"
      src={'assets/img/news5.jpg'}
     
    />

   
  </Carousel.Item>
</Carousel>
</div>
        )
}
}


export default Banner;
