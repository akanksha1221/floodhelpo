import React from 'react';
import '../Css/NewsCard.css';

function NewsCard(props){
    return(
        <>
        <div className="col-xl lg-3 md-4 sm-4 xs-8 m-3 mycard">       
            <div className="card">
                <img className="cardTop" src={props.imgsrc} alt="images"/>            
                <div className="cardBottom">
                    <a href={props.link} target="_blank" >
                    <div className="cardText">                     
                        <h3 className="cardTitle">{props.title}</h3>                       
                    </div>
                    </a>
                </div>
            </div>    
        </div>                        
                       
        </>
    )
}
export default NewsCard;