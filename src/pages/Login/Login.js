import './Login.css'
import Nav from '../../components/Navbar/Nav'
import { useState } from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
function Login() {
    let [username , setUsername] =  useState()
    let [pass , setPass] =  useState() 
    let navigate = useNavigate()
    let loginhandler = () =>{
        if(username == 'admin' && pass == '12345'){
            navigate('/panel')
        }
        else{
            swal({
                icon: "error",
                text: ' نام کاربری یا رمز عبور اشتباه است '
              });
        }
    }
    return (
        <>
            <Nav />
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">ورود به پنل </h2>
                    <input onChange={ (e) => {setUsername(e.target.value)}} type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                    <input onChange={ (e) => {setPass(e.target.value)}}type="password" className="form-control" name="password" placeholder="Password" required="" />
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" />  مرا به خاطر بسپار
                    </label>
                    <button onClick={loginhandler} className="btn btn-lg btn-primary btn-block logbt" type="button">ورود به پنل</button>
                </form>
            </div>
        </>
    )
}
export default Login