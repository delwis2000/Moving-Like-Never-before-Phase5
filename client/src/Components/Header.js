import Navbar from './Navbar'
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../B&L LOGO updated.jpg'

// function Header() {
//     return (
//         <div>
//         {/* <<h1> Moving Fast Track </h1> >    */}
//         <Navbar/>
//         </div>
//     )
// }
const headStyle = {
    backgroundColor: "white",
    borderBottomStyle: "solid",
    borderWidth: "2px",
    borderColor: "lightgray"
}
const logoStyle = {
    height: `200px`

}

const btnStyle ={
    float: "right",
    marginTop: "75px",
    marginRight: "20px",
    color: "white",
    backgroundColor: "#0A8FF1",
    border: "1.5px solid black",
    borderRadius: "10px",
    fontSize:"30px",
    padding: "2px 8px 2px 8px",
    fontFamily: "Genos, sans-serif",
    fontStyle: "italic"
}

const logoStyle1 = {
    height: `120px`,
    float: "left"

}

const logoStyle2 = {
    fontFamily: "forte",
    float: "left",
    fontSize: "25"

}

function Header ({onLogout, login, user}) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }
    return (
        <div style={headStyle}>
         
         <img style={logoStyle1} src={image} alt="image"
         />
         <p style= {logoStyle2}>Your Moving Platform</p>
 
        <Navbar onLogout={onLogout} login={login} user={user}/>
         </div>
         
        
    )
}

export default Header
