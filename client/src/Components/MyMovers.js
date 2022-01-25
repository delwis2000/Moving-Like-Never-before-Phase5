import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import image from '../background pic 2.png'

const form2Styles = {
  display: "flex",
  flexDirection: "column",
  height: "500px",
  maxWidth: "800px",
  justifyContent: "space-around",
  textAlign: "center",
  fontFamily: "lucida fax",
}


function MyMovers ({movers, client}) {
const [addMover,setAddMover] = useState(false)


function handleSubmit (e) {
    e.preventDefault()
    
    setAddMover(!addMover)
    
}

const [uploadMovers, setUploadMovers] = useState({
    name: "",
    rate: "",
    description: "",
    
  });
  const navigate = useNavigate();
  // const [user,setuser]= useState(false)

  useEffect(() => {
    if (client.isLoggedIn) {
      navigate("/MyMovers");
    }
  }, [client]);

  function handleChange(e) {
    setUploadMovers({ ...uploadMovers, [e.target.name]: e.target.value });
    console.log(uploadMovers);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("uploaded mover: " + JSON.stringify(uploadMovers));

    fetch("/movers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadMovers),
      credentials: "include",
    })
      .then((r) => r.json())
      .then((data) => {
        
        setUploadMovers({
            name: "",
            rate: "",
            description: "",
        });
        // setNewmovers(false);
      });
  }
return (

    // <div>hello</div>   
    <>   
    <form onSubmit={handleSubmit} style={form2Styles}>
    <img style={{paddingTop: "25px",paddingLeft: "175px", maxWidth: "2000px", width: "125%"}} src={image}/>
        <label>
            <input  type="text" placeholder="Aaliyah"value={movers.name} name="name" onChange={handleChange}/>
        </label>
        <label>
            Name:<br/>
            <input type="text" placeholder="222-585-1111"value={movers.rate} name="rate" onChange={handleChange}/>
        </label>
        <label>
            Cell:<br/>
            <input type="text" placeholder="$1.5 per miles"value={movers.cell} name="cell" onChange={handleChange}/>
        </label>
        <label>
            rate:<br />
            <input type="text" placeholder="I am available for moving request in the West Coast Area during February 2022"value={movers.description} name="description" onChange={handleChange}/>
        </label>
        
        <label>
            description:<br/>
            
        </label>
        <input onClick={handleSubmit} type="submit" value="Submit" />

        
    </form> 
    </>

)


}

export default MyMovers