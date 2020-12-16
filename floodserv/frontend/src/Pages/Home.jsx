import React from 'react';
import Slider from '../Component/Slider';
import Ticker from '../Component/Ticker';
import Slides from '../Component/Slideshow';
import HomeData from '../Data/HomeData';
import SData from '../Data/SlideshowData';
import HomeInfo from '../Component/HomeInfo';
import Emergency from '../Component/EmgKit';

function Home(){
    return(
        <>
            <Ticker />
           
            {/*<Slider/>*/}
            <Slides/>
            <div className="container home">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>FLOODs In India</h1>
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