
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "../../styles/App.css";
import Axios from "axios"
import Login from "./Login";
import { UserContext } from "../../context/UserContext";
import Dashboard from "../dashboard/Dashboard";
import { faAddressBook, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PasswordVisible from "../../Hooks/PasswordVisible";


const Loginform = () => {

    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState("openeye.png")
    const [inputType, setInputType] = useState("password")

const changevisibility = () =>{
   const visibles = () =>{
                setIcon(visible ? "openeye.png" : "closedeye.png")

                setInputType (visible ? "password" : "text")
                setVisible(!visible)
   }
   visibles();
}

       
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   var [url, setUrl] =useState("/")
   const [loading, setLoading] = useState(false);

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
                const data= await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/get/password",{
                        "email" : details.email,
                        "password": details.password
                        })     
                         console.log(data);
                         console.log(data.request?.status);
                        setUrl("/dashboard")
                        console.log("firsturl",url);
                        setLoading(true)
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
            {loading ? (
                <Dashboard/>  
            ) :(
                <div className="loginform">
                    <div className="loginicon">
                            <img src={"logo.png"}
                                    alt="pic" 
                                    height='30px'
                                    />
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
                    <div className="passwordbox" className="visiIconForPass">
                        <div className="password">Password</div>
                        <div ><input  type={inputType} id="pass" placeholder="*********"
                             onChange={e => setDetails({...details,password:e.target.value})}
                        ></input>
                        <img src={icon} width="20px" onClick={() => changevisibility()}/></div>
                    </div>

                    <Link to={url}><button className="button-reg"
                    onClick={() => login() }
                           >Sign in</button></Link>
                    <div className="another">
                        <div>Dont have Account? </div>
                        <Link to="/signup"><div>Register</div></Link>
                    </div>
                    <div className="a">
                                <Link to="/forgetpassword"><div>Forget password?</div></Link>
                            </div>
                    

                </div>
            </form>
                </div>
            )}

        </div>
    )
    
}


export default Loginform;