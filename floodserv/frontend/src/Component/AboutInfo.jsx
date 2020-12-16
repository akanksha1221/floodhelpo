import React from 'react';
import aboutdata from '../images/about.jpg';
import '../Css/AboutInfo.css';

function AboutInfo(props){
    return(
        <>
            
            <div className=" aboutinfo">
                <p>{props.para}</p>               
            </div>
               
            
        </>
    )
}
export default AboutInfo;