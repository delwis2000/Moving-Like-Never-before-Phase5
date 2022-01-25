import React from 'react'
import image from '../Wildcat_Movers_Truck_Packing.jpg'

// function MoverList() {
//     return (
//         <div>
//          <h1> List of Moving Request</h1>   
//         </div>
//     )
// }


function MoverList ({movers, client, setUpdate, login}) { 
    console.log(movers)
     const takeFilter = movers.filter(mover => mover).sort((a, b) => a.id - b.id); 
    
    const MoverList = takeFilter.map(mover => {
        return (
            <div key={mover.id} style={jobStyle}>
                <h3>{mover.name}</h3>
                <p>email: <br/>{mover.email}</p>
                <p>Description: <br />{mover.description}</p>
                <p>Rate: {mover.rate}</p>
                <p>cell: {mover.cell}</p>
                {/* {login ? 
                 <button className='btn' onClick={() => handleAccept(mover, client)} style={btnStyle}>Pick</button>
                :
                null
                } */}
            </div>
        )
    })

    function handleAccept (mover, client) {
        mover.taker_id = client.id
        fetch(`http://localhost:3000/movers/${mover.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(mover),
            credentials: "include"
        })
        .then(setUpdate(true))
    }

    return (
        <div style={bodyStyle}>
            <img style={{paddingTop: "30px", maxWidth: "600px", width: "90%"}} src={image} alt="mover search banner" />
            {login ?
                null
            :
                <p style={{textAlign: "center", fontFamily: "Genos, sans-serif", fontSize: "50px"}}>Please log in to select movers!</p>
            }
            {MoverList}
        </div>
    )
}

export default MoverList

const bodyStyle = {
        textAlign: "center"
    }
    
    const btnStyle = {
        marginTop: "10px",
        marginBottom: "10px", 
        marginRight: "5px",
        width: "75px", 
        backgroundColor: "#0A8FF1",
        color: "white",
        fontSize: "20px",
        borderRadius: "3px",
        borderWidth: "1px",
        borderColor: "black",
        padding: "2px"
      }
    
      const jobStyle = {
        fontFamily: "lucida fax", 
        fontSize: "20px", 
        textAlign: "left",
        width: "90%", 
        margin: "auto", 
        lineHeight: "30px", 
        borderBottomStyle: "solid", 
        borderWidth: "2px", 
        borderColor: "lightgray" 
      }
