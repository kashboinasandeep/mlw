import "./Style.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const usernameValue = usernameRef.current.value;
        const passwordValue = passwordRef.current.value;
        if (usernameValue === "admin" && passwordValue === "admin123") {
            navigate("/dashboard");
        } else {
            navigate("/dashboard");
        }
    };

    

    return (
        <>
           <div className="container">

           <div className="login_parent">
           <h2 className="header">Credentials</h2>
           <label>UserName:</label>
           <input type="text" ref={usernameRef} placeholder="Enter Username" /><br /><br />
           <label>  Password: </label>
          <input type="password" ref={passwordRef} placeholder="Enter password" /><br /><br />
          <div className="ender">
            
          <button onClick={login} className="submit_btn">Submit</button>
            
           
            <div className="forgotpwd">

            <Link to={"/forgot_password"} className="forgotpwd">forgot password</Link>
            <Link to={"/queries"} className="queries">Any queries ?</Link>
            </div>



            
            
    
          </div>
           </div>
           </div>
           
        </>
    );
};

export default Login;
