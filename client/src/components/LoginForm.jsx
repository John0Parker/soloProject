// See note on lines 17-20 of App.jsx


// import React, {useState} from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom"

// const LoginForm = ({setLoggedUser}) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const loginHandler = e => {
//         e.preventDefault();
//         axios.post("http://localhost:8000/api/login", {email, password}, {withCredentials: true})
//             .then( res => {
//                 const userToLogin = {
//                     email: res.data.email
//                 }
//                 console.log(res.data);
//                 setLoggedUser(userToLogin);
//                 navigate("/dashboard");
//             })
//     }

//     return(
//         <form onSubmit={loginHandler}>
//             <h3>Login</h3>
//             <div>
//                 <label>Email</label>
//                 <input type="text" value={email} onChange={ e => setEmail(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />
//             </div>
//             <button>Log In</button>
//         </form>
//     );
// }

// export default LoginForm;