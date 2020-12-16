import React,{useState} from 'react';
import {AiFillLeftCircle,AiFillRightCircle } from 'react-icons/ai';

import '../Css/slider.css';
import Imgslider from './Imgslider';
import i1 from '../images/im1.jpg';
import i2 from '../images/im2.jpg';
import i3 from '../images/im3.jpg';
import i4 from '../images/im4.jpg';
import i5 from '../images/im5.jpg';
function Slider(){
    let sliderArr=[<Imgslider src={i1}/>,<Imgslider src={i2}/>,<Imgslider src={i3}/>,<Imgslider src={i4}/>,<Imgslider src={i5}/>];
    const [x, setx] = useState(0);
    const goLeft = ()=>{
       x===0? setx(-100 * (sliderArr.length -1)) :setx(x+100);
    }
    const goRight = ()=>{
        x=== -100 * (sliderArr.length -1)? setx(0) :setx(x-100);
    }
    return(
        <>
            <div className="slider">
                {sliderArr.map((item,index)=>{
                    return(
                        <div key ={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })}
            
                <AiFillLeftCircle id="goLeft"  onClick={goLeft}/>
                <AiFillRightCircle id="goRight" onClick={goRight}/>
            </div>
        </>
    )
}
export default Slider;