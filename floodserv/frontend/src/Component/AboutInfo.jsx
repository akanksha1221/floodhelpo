import React from 'react';
import aboutdata from '../images/about.jpg';
import '../Css/AboutInfo.css';

function AboutInfo(props){
    return(
        <>           
            <p>{props.para}</p>
        </>
    )
}
export default AboutInfo;