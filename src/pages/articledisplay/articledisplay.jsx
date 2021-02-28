import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// ArticlePage from './pages/articlepage/articlepage.component';

import {Card} from 'react-bootstrap';


//{/*const ContentDisplayItem = ({title,imageUrl,value}) => (*/}


  class ContentDisplayItem extends React.Component {

    constructor()
    {
      super();
      const{id}=this.props.match.params
      console.error("hi")

     //this.state={}
    }
  }
     
    /* <div className="container">
      <div className="row">
        <Card className="col-md-12">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{value}</Card.Text>
          </Card.Body>
        </Card>

    </div>
    </div>
*/

    
    

    export default ContentDisplayItem;
