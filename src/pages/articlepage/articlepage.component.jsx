import React from 'react';
//import Content from '../../components/content/content.component'
import ARTICLE_DATA from './articlepage-data.js'
import ContentItem from '../../components/content-item/content-item.component';






 class ArticlePage extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {

            collections:ARTICLE_DATA[0].article_sections 

        }
        console.log(ARTICLE_DATA.article_sections)


    }


    render(){

        const {collections} = this.state;

        return(<div className="article-page">
            {
                
                collections.map(({id,title,value,imageUrl}) =>(
                   <ContentItem key={id} value={value} title={title} imageUrl={imageUrl}></ContentItem> 
                ))
             
               // collections.map(({id,...otherCollectionProps}) =>(
                    //<ContentItem key={id} {...otherCollectionProps}/>
               // ))
                

            }

        </div>)
        }
}

export default ArticlePage;

