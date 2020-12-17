import React from "react"
import Loginform from "./Loginform"
import LoginSwiper from "./LoginSwiper"


const Login = () => {
    return(
        <div className="login">
                <div className="loginform"><Loginform/></div>
                <div className="loginswiper"><LoginSwiper/></div>
        </div>
        
    )
}

export default Login;