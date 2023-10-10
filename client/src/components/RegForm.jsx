// See note on lines 17-20 of App.jsx


// import React, {useState} from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// const RegForm = ({setLoggedUser}) => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const navigate = useNavigate();

//     const registerHandler = e => {
//         e.preventDefault();
//         axios.post("http://localhost:8000/api/register", {email, password, confirmPassword}, {withCredentials: true})
//             .then( res => {
//                 setLoggedUser({
//                     _id: res.data._id,
//                     email: res.data.email
//                 })
//                 navigate("/dashboard")
//             })
//     }

//     return(
//         <form onSubmit={registerHandler}>
//             <h3>Register</h3>
//             <div>
//                 <label>Email</label>
//                 <input type="email" value={email} onChange={ e => setEmail(e.target.value)}/>
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
//             </div>
//             <div>
//                 <label>Confirm Password</label>
//                 <input type="password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}/>
//             </div>
//             <button>Register</button>
//         </form>
//     );
// }

// export default RegForm;

