import React from 'react';
import Card from '../Component/NewsCard';
import news from '../images/im8.jpg';
import Newsdata from './../Data/Newsdata';
function News(){
    return(
        <>
            <div className="banner" style={{backgroundImage: `url(${news})`}}>
                <h1 className="title">News</h1>
            </div>
            <div className="container ">
            <div className="row mt-4 align-items-center justify-content-center d-flex">
                
                {Newsdata.map((val, index)=>{
                    return(
                        <Card
                            imgsrc={val.imgsrc}
                            title={val.title}
                            link={val.links}
                        />
                    )
                })}
            </div>
            </div>
         
           
        </>
    )
}
export default News;