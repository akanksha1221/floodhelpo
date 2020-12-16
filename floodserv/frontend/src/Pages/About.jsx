import React from 'react';
import about from '../images/im9.jpg';
import aboutdata from '../images/about.jpg';
import '../Css/AboutInfo.css';
import AboutInfo from '../Component/AboutInfo';
import AboutData from "../Data/AboutData";
import '../Css/banner.css';
function About(){
    return(
        <>
            <div className="banner" style={{backgroundImage: `url(${about})`}}>
                <h1 className="title">About</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col aboutinfo">
                        <h1>The Project</h1>
                        <p> <img className="abtimg" src={aboutdata} alt="about.jpg"/></p>
                        {AboutData.map((val,index)=>{
                        return(
                            <AboutInfo para={val.para}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;