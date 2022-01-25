import React from 'react'
import image from '../movers 2.jpg'

function AboutUs() {
    return (
        <div>
        <h1 style={{fontFamily: "algerian"}} >What is Bash&Lexy Moving Track? </h1>  
        <p style={{maxWidth: "1000px", textAlign: "left", margin: "auto", width: "75%", fontFamily: "lucida fax", fontSize: "20px"}}>Bash&Lexy Moving Track is a platform which allows clients to find and hire movers to assist them with moving their beloging from one city/state to another city/state efficiently. The client posts a description of their moving request and a price range they are willing to pay for a mover to complete it. The client may invite specific movers to apply for the request.</p>
        <h1 style={{fontFamily: "algerian"}} >Why this app? </h1>
        <p style={{maxWidth: "1000px", textAlign: "left", margin: "auto", width: "75%", fontFamily: "lucida fax", fontSize: "20px"}}>Efficieny and Reliability when it comes to finding resources to move all your belogings safely from one home to another without too much hustle</p> 

        <img src={image}/>
        <h1 style={{fontFamily: "algerian"}} >Contact Us: 
        1-888-345-Bash/ Bash&Lexy@movingnow.com </h1>
        </div>
    )
}

export default AboutUs
