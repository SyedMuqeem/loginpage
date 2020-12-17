
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../../styles/App.css";
import axios from "axios"
import Login from "./Login";
import { UserContext } from "../../context/UserContext";


const Loginform = () => {



       
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   var [url, setUrl] =useState("/")

   const [details, setDetails] = useState({
       email:"" , password:""
   })

    const login =() => {
            var email1 = document.getElementById('email').value
            console.log(email1);
            setEmail(email1)

            var pass1 = document.getElementById('pass').value
            console.log(pass1);
            setPassword(pass1)
            // console.log(details);

            
            
        const FetchDetails = async () => {
                    // console.log("RESPONSE000: ", email, password)
            
            try{
                const data= await axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/get/password",{
                        "email" : details.email,
                        "password": details.password
                        })     
                         console.log(data);
                        setUrl("/dashboard")
                        console.log("firsturl",url);
            } catch (e){
                console.log(e);
                alert("wrong credentials")
            } 
        };    
             
                    
            
                
            


            
            // const FetchDetails = async () => {
            //     const {data} = await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/get/password",{
            //           "email" : details.email,//"rizwanperisync@gmail.com",
            //           "password": details.password//"Rizwan@123"
            //       });
            //     console.log("RESPONSE: ", data);
            //     console.log("status",data.status);
            //     console.log("token",data.token);
            //     setUrl="/dashboard";
                
              
              
                // const details = data.results[0]
                // console.log("RESPONSE1: ", details);
              
                //setDetails(details) 
            //   };
           

            FetchDetails();


            // if (email==="rizwanperisync@gmail.com"&& pass==="Rizwan@123") {
            //     setUrl("/dashboard") 
             
    }

    // const effecturl = () =>{
    //     console.log("thirdeffect",url);
    //     setUrl(url)
    // }
     useEffect(()=>{
                    console.log("aftereffect",url);
                    // effecturl();
       },[url])
    


   
    return(
        <div className="loginform">
            <div className="loginicon">
            <img src={"logo.png"}
                    alt="pic" 
                    height='19px'/>
            </div>
            <form>
                <div className="loginforms">
                    <div className="createacount"><h1>Login account</h1></div>
                    <div className="emailbox">
                        <div className="email">Email</div>
                        <input type="text" id="email" placeholder="josh@gmail.com" 
                            onChange={e => setDetails({...details,email:e.target.value})}
                        ></input>
                    </div>
                    <div className="passwordbox">
                        <div className="password">Password</div>
                        <input type="password" id="pass" placeholder="*********"
                             onChange={e => setDetails({...details,password:e.target.value})}
                        ></input>
                    </div>

                    <Link to={url}><button 
                    onClick={() => login() }
                           >Sign in</button></Link>
                    <div className="another">
                        <div>Already have an account? </div>
                        <Link to="/signup"><div>Register</div></Link>
                    </div>
                    

                </div>
            </form>

        </div>
    )
    
}


export default Loginform;