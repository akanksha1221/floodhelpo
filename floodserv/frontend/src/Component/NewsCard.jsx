import React from 'react';
import '../Css/NewsCard.css';
//array
import nm1 from '../images/news/nm1.jpg';
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

/*<div className="cards">
            <div className="card" >
                <img className="card-img-top" src={props.imgsrc} alt="Card image"/>
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.sname}</h3>
                    <a href={props.link} target="_blank" >
                        <button>know more</button>
                    </a>
                </div>
            </div>
            </div> */