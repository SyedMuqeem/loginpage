import React,{useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
  import Axios from "axios"
import LoginSwiper from "./loginpage/LoginSwiper";

const Forgetpassword = () => {


    const [token, setToken] = useState("");
    const [otpmessage, setOtpmessage] = useState("")
    const [message, setMessage] = useState("")
    const[loading, setLoading] = useState(false)
    const [details, setDetails] = useState({
        email:"" , password:"",type:"REGISTRATION", otp:"", newPassword:""
    })

const verifyNumForPassForget = () =>{
    const fetchregtoken= async () => {
        setLoading(true)
        try{
            const {data}= await Axios.post("http://3.7.168.72:15010/user/check",{
                    "mobile1" : details.email,
                    "type": "FORGOT_PASSWORD"
                    }
                    )  
                    
                    
                    setToken(data.token) 
                    setMessage(data.message)
                    console.log(data.token);
                    console.log(data.message);
                     
        } catch (e){
            console.log("eror in num verify",e);
            alert("Not A Registered user")
            setLoading(false)
        } 

        console.log(token);
        console.log(message);
        console.log(details.email);
    }
    fetchregtoken();
}



const sendOtpForVerification =() => {
    const fetchotp= async () => {
        try{
            const {data}= await Axios.post("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/mobile/otp/send",{
                    "token": token,
                    "mobile1" : details.email,
                    
                    }
                    )  
                    
                    
                    setOtpmessage(data)
                    console.log("otp message",data);
                     
        } catch (e){
            console.log("eror in num verify",e);
            alert("Not A Registered user")
        } 

       
    }
    fetchotp();
}


const otpVerification =() => {
    const verifyotpsent= async () => {
        try{
            const {data}= await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/verify/mobile",{
                    "token": token,
                    "mobile1" : details.email,
                    "otp": details.otp
                    }
                    )  
                    
                    
                    // setOtpmessage(data)
                    console.log(data.message);
                    setMessage(data.message)
                     
        } catch (e){
            console.log("error in num verify",e);
            alert("Retry")
        } 

       
    }
    console.log(details.otp);
    verifyotpsent();
}


const verifyPassword =() => {
    const verifypass= async () => {
        try{
            const {data}= await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/reset/password/mobile",{
                    "token": token,
                    "mobile1" : details.email,
                    "new_password": details.newPassword,
                    }
                    )  
                    
                    
                    // setOtpmessage(data)
                    console.log(data);
                    setOtpmessage(data)
                     
        } catch (e){
            console.log("error in new pass set",e);
            alert("password not set")
        } 

       
    }
    console.log(details.otp);
    verifypass();
}



    return(
        <div className="login">
        <div className="loginform">
                    <div className="loginicon">
                            <img src={"logo.png"}
                                    alt="pic" 
                                    height='30px'/>
                    </div>
            <form>
                <div className="loginforms">
                   {otpmessage === "PASSWORD_UPDATED" ? (
                       <div><h1>
                           PASSWORD UPDATED SUCESSFULLY
                           </h1> </div>
                   ) : (
                        <div>
                            
                            <div className="createacount"><h1>Forget Password</h1></div>
                    <div className="emailbox">
                        <div className="email">Number</div>
                        <input type="text" id="email" placeholder="123456789" 
                            onChange={e => setDetails({...details,email:e.target.value})}
                        ></input>
                    </div>
                    




                {message==="MOBILE_VERIFICATION_SUCCESSFUL" ? (
                    <div>
                        <input className="listsform" type="text" placeholder="enter new password"
                            onChange={e => setDetails({...details,newPassword:e.target.value})}
                        ></input>
                    <div>
                            <Link ><button className="button-reg"
                                onClick={() => verifyPassword() }
                               >Verify and Reset Password</button></Link>
                            </div>
                    </div>
                ) : (
                    otpmessage === "OTP_SENT" ? (
                            
                        <div >
                            <div>
                                <input className="listsform" type="text" id="otp" placeholder="Enter Otp" 
                                onChange={e => setDetails({...details,otp:e.target.value})}
                                ></input>
                            </div>
                            <div>
                                <Link ><button className="button-reg"
                                onClick={() => otpVerification() }
                               >Verify Otp</button></Link>
                            </div>
                        </div>
                ) : (
                    message==="REGISTERED_USER" && details.email != ""? (
                        <Link ><button className="button-reg"
                        onClick={() => sendOtpForVerification() }
                               >send otp</button></Link>
                ) : (
                    <Link ><button className="button-reg"
                onClick={() => verifyNumForPassForget() }
                       >Verify number</button></Link>
                    )
                )
                )
                }

                    

                    
                    


                    


                    
                    
                            
                            
                        </div>
                   )}
                    
                    <div className="another">
                        <div>Already have an account? </div>
                        <Link to="/"><div>Login</div></Link>
                    </div>
                    <div className="another">
                        <div>Dont have Account? </div>
                        <Link to="/signup"><div>Register</div></Link>
                    </div>
                </div>
            </form>
                </div>
                <div className="loginswiper"><LoginSwiper/></div>
            </div>
    )
}
export default Forgetpassword;