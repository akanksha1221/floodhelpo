import React from 'react';
import Ticker from '../Component/Ticker';
import Slides from '../Component/Slideshow';
import HomeData from '../Data/HomeData';
import HomeInfo from '../Component/HomeInfo';
import Emergency from '../Component/EmgKit';
import "../Css/Home.css"

function Home(){
    return(
        <>
            <Ticker />
            <Slides/>
            <div className="container home">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>Floods In India</h2>
                        {HomeData.map((val,index)=>{
                            return(
                                 <HomeInfo para={val.para}/>
                                  )
                         })}
                    </div>
                    <div className="col">
                        <Emergency/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;