
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const ContentItem = ({title,imageUrl,value}) => (


   
    <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{value.length > 50 ? value.slice(0,50)+'...' :value}</Card.Text>
            <Link to="/articlepage" className="btn btn-primary">ReadMore</Link>
            {/*<Button variant="primary">Read More</Button>*/}
        </Card.Body>


    </Card>
    

    
    )
export default ContentItem;
      
      
      
      
      
      
      
      
      
      
      
      
      /*<div className="content-item">
           <div className="content-start">
               <div className="content-title">
                   <h2 className="content-heading">{title}</h2>
                </div>

                <div className="content-text">
                    <p className="content-text-section">{value.length > 30 ? value.slice(0,30)+'...' :value}</p>
                  
                </div>

                <div className="content-image">
                    <img className="content-image-section" src={imageUrl}></img>
                </div>
           </div>
        
        
        
              </div>*/
    

    
