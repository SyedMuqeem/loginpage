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
        email:"" , password:"",type:"REGISTRATION", otp:""
    })

    const [token, setToken] = useState("");
    const [message, setMessage] = useState("")
    const [otpstatus, setOtpstatus] = useState("")
    const [mobileVeriMessage, setMobileVeriMessage] = useState("")

    const registration = () => {
        // var email1 = document.getElementById('emailreg').value
        //     console.log(email1);
            console.log(details);



            const fetchregtoken= async () => {
                try{
                    const {data}= await Axios.post("http://3.7.168.72:15010/user/check",{
                            "mobile1" : details.email,
                            "type": details.type
                            }
                            )  
                            
                            
                            setToken(data.token) 
                            setMessage(data.message)
                             
                } catch (e){
                    console.log("eror in num verify",e);
                    alert("wrong credentials")
                } 

                console.log(token);
                console.log(message);
            }
            fetchregtoken();
    }
  


    const sendotp = () => {
      const sendotptoemail = async()=>{console.log(token);
            try{
                const data= await Axios.post("http://3.7.168.72:15010/user/mobile/otp/send",{
                        "token" : token,
                        "mobile1" : details.email,
                        
                        }
                        )  
                        
                        console.log(data.status);
                        setOtpstatus(data.status)
                       
                         
            } catch (e){
                console.log(e);
                alert("otp not send")
            } 
        }
        sendotptoemail();
    }

    const verifyotp =() => {
        const verifytheotp = async() => {
                                console.log(details.otp);

            try{
                const data= await Axios.put("http://3.7.168.72:15010/user/verify/mobile",{
                        "token" : token,
                        "mobile1" : details.email,
                        "otp": details.otp
                        }
                        )  
                        
                        console.log(data.data?.message);
                        setMobileVeriMessage(data.data?.message)
                       
                         
            } catch (e){
                console.log(e);
                alert("otp not send")
            } 


        };
        verifytheotp();
    }

    const [regDetails, setRegDetails] = useState({
        firstname:"" , lastname:"",email1:"", password1:""
    })


    const registrationfinal = () => {
        console.log(regDetails.firstname);
        console.log(regDetails.lastname);
        console.log(regDetails.email1);
        console.log(regDetails.password1);

                const finallyreg = async() => {
                    try{
                        const data= await Axios.post("http://3.7.168.72:15010/user/create/essen",{
                                "token" : token,
                                "fname": regDetails.firstname,
                                "lname": regDetails.lastname,
                                "email": regDetails.email1,
                                "mobile1": details.email,
                                "password": regDetails.password1,
                                "country_id": "77"
                                }
                                )  
                                
                                console.log(data.data);
                               
                                 
                    } catch (e){
                        console.log(e);
                        alert("registration failed")
                    } 
        

                }


                finallyreg();

        
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
                                <div className="email">Enter your mobile number</div>
                                <input className="listsform" type="text" id="emailreg" placeholder="123456789" 
                                    onChange={e => setDetails({...details,email:e.target.value})}
                                ></input>
                            </div>
                            


                            {mobileVeriMessage ? (
                                    <div> 
                                        
                                        <div>
                                             <input className="listsform" type="text" id="firstname" placeholder="First Name" 
                                                onChange={e => setRegDetails({...regDetails,firstname:e.target.value})} ></input>
                                        </div>
                                        <div>
                                             <input className="listsform" type="text" id="lastname" placeholder="Last Name" 
                                                onChange={e => setRegDetails({...regDetails,lastname:e.target.value})} ></input>
                                        </div>
                                        <div>
                                             <input className="listsform" type="text" id="email1" placeholder="email" 
                                                onChange={e => setRegDetails({...regDetails,email1:e.target.value})} ></input>
                                        </div>
                                        <div>
                                             <input className="listsform" type="text" id="password1" placeholder="Set Password" 
                                                onChange={e => setRegDetails({...regDetails,password1:e.target.value})} ></input>
                                        </div>
                                        
                                            <div>
                                                    <Link
                                                    //  to={url}
                                                                ><button className="button-reg"
                                                    onClick={() => registrationfinal() }
                                                    >Registration final</button></Link>
                                            </div>
                                    </div>
                            ) : (
                                token && message && otpstatus ? (


                                    <div>
                                        <input className="listsform" type="text" id="otp" placeholder="enter otp" 
                                            onChange={e => setDetails({...details,otp:e.target.value})}
                                        ></input>
                                            <div>
                                            <Link
                                            //  to={url}
                                                        ><button className="button-reg"
                                            onClick={() => verifyotp() }
                                            >Submit otp</button></Link>
                                            </div>
                                    </div>
                            
                            ) : ( token && message ?(

                                <Link
                                //  to={url}
                                            ><button className="button-reg"
                                onClick={() => sendotp() }
                                >Send OTP</button></Link>

                            ) : (


                                <Link
                                        //  to={url}
                                                    ><button className="button-reg"
                            onClick={() => registration() }
                                >Register</button></Link>
                            )

                                
                            )
                            )}


                            




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