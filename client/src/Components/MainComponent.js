
import AboutUs from './AboutUs'
import {useState, useEffect } from 'react' 
import MoverList from './MoverList'
import { Routes, Route,} from 'react-router-dom'
import LoginSignupPage from './LoginSignupPage'
import MyMovers from './MyMovers'


function MainComponent() {
    const [login, setLogin] = useState(false)
  const [client, setClient] = useState({})
  const [movers, setMovers] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(()=>{
    fetch('/movers')
    .then (response => response.json())
    .then (data => {
      setMovers(data)
      setUpdate(false)
    })
  }, [update])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          setClient(client) 
          setLogin(true)});
      }
    });
  }, []);

  

  function onLogin(client){
   setLogin(true)
   setClient(client)

  }

  
  function onLogout() {
    setLogin(false)
    setClient({})
  }

    
    return (
        <div>
         
          <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route path="/MoverList" element={<MoverList movers={movers} client={setClient} setUpdate={setUpdate} login={login}/>}/>
        <Route path="/login" element={<LoginSignupPage onLogin={onLogin}/>}></Route>
        <Route path="/MyMovers" element={<MyMovers client={client} movers={movers}/>}></Route>
      </Routes> 
        </div>
    )
}

export default MainComponent
