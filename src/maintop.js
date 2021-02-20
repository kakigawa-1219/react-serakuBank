import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './css/maintop.css';

function MainTop() {
    const public_path = `${process.env.PUBLIC_URL}/images`;
    return(
        <div id="main1">
        <div id="main-image">
        
        {(() => {   
           
                  const settings = {
                      customPaging:function(i){
                          return(
                              <a className="thumb_list"><img src={`${public_path}/main0${i+1}_thumb.png`} alt=""/> </a>
                          );
                      },
                   dots:true,
                   dotsClass: "slick-dots slick-thumb",
                   speed: 500,
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   autoplay:true,
                   autoplaySpeed:5000,
                   nextArrow:<img src={`${public_path}/arrow_right.png`} alt=""/>,
                   prevArrow:<img src={`${public_path}/arrow_left.png`} alt=""/>,
                    };
                
                 return(
                 
            <Slider {...settings}>
                <div className="main-image"><img src={`${public_path}/main01.png`}  alt=""/></div>
                <div className="main-image"><img src={`${public_path}/main02.png`}  alt=""/></div>
                <div className="main-image"><img src={`${public_path}/main03.png`}  alt=""/></div>
            
            
            </Slider>
           
            );
            
    } )()}        
                          
                        
            
            
            
       </div>
        </div>
    );
}

export default MainTop