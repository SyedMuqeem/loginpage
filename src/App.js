import React, {useState, useEffect} from "react"
import "./styles/App.css"
import Axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/loginpage/Login";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


import { UserContext } from "./context/UserContext";
import Dashboard2 from "./screens/dashboard/Dashboard2";
import SignUp from "./screens/loginpage/signup/SignUp";


const App =() =>{
  const [user, setUser] = useState(null)
  const [details, setDetails]= useState('')

  const fetchDetails = async () => {
      const {data} = await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/get/password",{
            "email" : "rizwanperisync@gmail.com",
            "password": "Rizwan@123"
        });
       
      // console.log("RESPONSE: ", data.token);
      
    
    
      // const details = data.results[0]
      // console.log("RESPONSE1: ", details);
    
      setDetails(details) 
    };
    
      useEffect(()=>{
        fetchDetails()
      },[])




  return (
    <Router>
                <UserContext.Provider value={{user,setUser}}>
                    <Switch>
                                <Route exact path="/">
                                      <Login/>
                                </Route>
                                
                                <Route exact path="/dashboard">
                                      <Dashboard/>
                                </Route>
                                <Route path="/dashboard2">
                                    <Dashboard2/>
                                </Route>
                                <Route path="/signup">
                                    <SignUp/>
                                </Route>
                                
                    </Switch>
                </UserContext.Provider>
        </Router>
  );
}

export default App;
