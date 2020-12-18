import React,{useState} from "react";
import LoginSwiper from "../LoginSwiper";
import Axios from "axios"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

const SignUp= () => {

    

    const [details, setDetails] = useState({
        email:"" , password:"",type:"REGISTRATION"
    })


    const registration = () => {
        var email1 = document.getElementById('emailreg').value
            console.log(email1);
            console.log(details);



            const fetchregtoken= async () => {
                try{
                    const data= await Axios.post("http://3.7.168.72:15010/user/check",{
                            "email" : details.email,
                            "password": details.type
                            }
                            )  
                            
                            console.log(data);   
                             
                } catch (e){
                    console.log(e);
                    alert("wrong credentials")
                } 
            }
            fetchregtoken();
    }
  


    return(
        <div className="login">
                    <div className="loginform">
                    <div className="loginicon">
                            <img src={"logo.png"}
                                    alt="pic" 
                                    height='19px'/>
                    </div>
                <div className="loginform">
                    <form>
                        <div className="loginforms">
                            <div className="createacount"><h1>Register account</h1></div>
                            <div className="emailbox">
                                <div className="email">Email</div>
                                <input type="text" id="emailreg" placeholder="josh@gmail.com" 
                                    onChange={e => setDetails({...details,email:e.target.value})}
                                ></input>
                            </div>
                            

                            <Link
                                        //  to={url}
                                                    ><button className="button-reg"
                            onClick={() => registration() }
                                >Register</button></Link>
                            <div className="another">
                                <div>Already have an account? </div>
                                <Link to="/"><div>Login</div></Link>
                            </div>
                            

                        </div>
                    </form>
                </div>
                    </div>
        <div className="loginswiper"><LoginSwiper/></div>
        </div>
    )
}

export default SignUp;