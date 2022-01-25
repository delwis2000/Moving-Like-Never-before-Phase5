import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom'

function NavBar ({onLogout, login, user}) {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)

    let link1Style ={
        
        textDecoration:"none",
        color: "#535B61",
        padding: "3px 6px 3px 6px",
        borderRadius: "5px",
        backgroundColor: "white"
    }

    let link2Style ={
        textDecoration:"none",
        color: "#535B61",
        padding: "3px 6px 3px 6px",
        borderRadius: "5px",
        backgroundColor: "white"
    }

    let link3Style ={
        textDecoration:"none",
        color: "#535B61",
        padding: "3px 6px 3px 6px",
        borderRadius: "5px",
        backgroundColor: "white"
    }

    if (hover1 === true) {
        link1Style.color = "orange"
    } else {
        link1Style.color = "#535B61"
    }

    if (hover2 === true) {
        link2Style.color = "orange"
    } else {
        link2Style.color = "#535B61"
    }

    if (hover3 === true) {
        link3Style.color = "orange"
    } else {
        link3Style.color = "#535B61"
    }
    
    const navStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        fontFamily: "algerian",
        fontStyle: "italic",
        fontSize: "35px",
        
        
        
    }

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
        backgroundColor: "orange",
        border: "1.5px solid black",
        borderRadius: "10px",
        fontSize:"30px",
        padding: "2px 8px 2px 8px",
        fontFamily: "algerian",
        fontStyle: "italic"
    }

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div style={navStyle}>
            <NavLink 
                style={link1Style}
                onMouseOver={() => setHover1(true)}
                onMouseOut={() => setHover1(false)}
                to="/"
            >
                About Us
            </NavLink>
            <NavLink
                style={link2Style}
                onMouseOver={() => setHover2(true)}
                onMouseOut={() => setHover2(false)}
                to="/MoverList"
            >
                Mover List
            </NavLink>
            <NavLink 
                style={link3Style}
                onMouseOver={() => setHover3(true)}
                onMouseOut={() => setHover3(false)}
                to="/mymovers"
            >
                My Movers
            </NavLink>
            {login ?
            <>
            <Link to="/login">
                <button className='btn' style={btnStyle} onClick={handleLogout}>Logout </button>
            </Link>
            <p style={{float: "right", marginTop: "90px", marginRight: "20px", fontFamily: "sans-serif"}}>Welcome, {user.name}!</p>
            </>
            :
            <Link to="/login">
                <button className='btn' style={btnStyle}> Login/Signup </button>
            </Link>
        }
        </div>
    )
}
export default NavBar