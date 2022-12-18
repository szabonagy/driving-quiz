import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import "../Styles/login.css";
import logo from '../images/logo.png';

function LoginForm({ existingUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await FirebaseAuthService.registerUser(username, password);
            setUsername("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    }

    function handleLogout() {
        FirebaseAuthService.logoutUser();
    }

    return (
        <div className="login-form-container">
            {
                existingUser? ( <div className="row">
                    <h3>Welcome, {existingUser.email}</h3>
                    <button type="buttton" className="primary-button" onClick={handleLogout}>Logout</button>
                    </div> 
                    ) : (
                    //  <form onSubmit={handleSubmit} className="login-form">
                    //     <label className="Input-label login-label">
                    //         Username (email):
                    //         <input
                    //             type="email"
                    //             required
                    //             value={username}
                    //             onChange={ (e) => setUsername(e.target.value)}
                    //             className="input-text"
                    //         />
                    //     </label>
                    //     <label className="Input-label login-label">
                    //         Password:
                    //         <input
                    //             type="password"
                    //             required
                    //             value={password}
                    //             onChange={ (e) => setUsername(e.target.value)}
                    //             className="input-text2"
                    //         />
                    //     </label>
                    //     <div className="button-box">
                    //         <button className="primary-button">Submit</button>
                    //     </div>
                    //  </form>

                     <form onSubmit={handleSubmit} className="login-form">
                     <img class="mb-4" src={logo} alt="" width="330" height="130"/>
                     <h1 class="h3 mb-3 fw-normal">Please log in</h1>
                 
                     <div class="form-floating">
                       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={ (e) => setUsername(e.target.value)}/>
                       <label for="floatingInput">Email address</label>
                     </div>
                     <div class="form-floating">
                       <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                       <label for="floatingPassword">Password</label>
                     </div>
                 
                     <div class="checkbox mb-3">
                       <label>
                         <input type="checkbox" value="remember-me"/> Remember me
                       </label>
                     </div>
                     <button class="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
                     <button type="button" class="w-100 btn btn-lg btn-primary btn-danger">Google authentification</button>
                     <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up</button>
                     <p class="mt-5 mb-3 text-muted">© {curYear}</p>
                   </form>
                    )
            }
        </div>);
};

export const curYear= new Date().getFullYear()
export default LoginForm;