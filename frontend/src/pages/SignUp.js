// import React, { useState } from 'react'
// import Axios from 'axios'
// import {useNavigate } from 'react-router-dom'
// import BreadCrumb from '../components/BreadCrumb'
// import { Link } from "react-router-dom";
// import Meta from '../components/Meta'
// const SignUp = () => {

//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const navigate = useNavigate()
//     const handleSubmit = (e)=>{
//       e.preventDefault()
//       Axios.post('http://localhost:3000/auth/signup',{username, email, password})
//       .then(response =>{
//           if(response.data.status)
//           {
//               navigate('/login')
//           }
//       }).catch(err => {
//           console.log(err);
//       })

//   }


//   return (
// <>
//   <Meta title={'Sign Up'} />
//   <BreadCrumb title='Sign Up' />

//   <div className="login-wrapper py-5 home-wrapper-2">
//     <div className="container-xxl">
//       <div className="row">
//         <div className="col-12">
//           <div className="auth-card">
//             <h3 className='text-center mb-3'>Create an Account</h3>
//             <form action="" className='d-flex flex-column gap-15'>
//               <div>
//                 <input type="text" name="Name" id="" placeholder='Enter name' className='form-control' />
//               </div>
//               <div>
//                 <input type="email" name="email" id="" placeholder='Enter email' className='form-control' />
//               </div>
//               <div>
//                 <input type="tel" name="mobile" id="" placeholder='Enter mobile number' className='form-control' />
//               </div>
//               <div className='mt-1'>
//                 <input type="password" name="password" placeholder='Enter password' id="" className='form-control' />
//               </div>
//               <div>
//                 <div className=" mt-1 d-flex justify-content-center gap-15 align-items-center">
//                   <button className='button border-0' type='submit' >Sign Up</button>

//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

// </>
//   )
// }

// export default SignUp

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import React, { useRef } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(
      'http://localhost:3300/auth/register', {
      username: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passRef.current.value
    }
    ).then((res) => {
      //console.log(res.status);
     if( res.status===201){
      console.log(res.data.message);

      nameRef.current.value = ""
      emailRef.current.value = ""
      phoneRef.current.value = ""
      passRef.current.value = ""

      toast(res.data.message, {
        onClose: () => {
          navigate('/login');
                }
      })
     }
      
      
    })

  }
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const phoneRef = useRef(null);

  return (

    <div>
      <>
        <Meta title={'Sign Up'} />
        <BreadCrumb title='Sign Up' />

        <div className="login-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  <h3 className='text-center mb-3'>Create an Account</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" name="Name" id="" placeholder='Enter name' className='form-control' ref={nameRef} />
                    </div>
                    <div>
                      <input type="email" name="email" id="" placeholder='Enter email' className='form-control' ref={emailRef}/>
                    </div>
                    <div>
                      <input type="tel" name="mobile" id="" placeholder='Enter mobile number' className='form-control' ref={phoneRef} />
                    </div>
                    <div className='mt-1'>
                      <input type="password" name="password" placeholder='Enter password' id="" className='form-control' ref={passRef}/>
                    </div>
                    <div>
                      <div className=" mt-1 d-flex justify-content-center gap-15 align-items-center">
                        <button className='button border-0' type='submit' onClick={handleSubmit}>Sign Up</button>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

      </>
    </div>
  )
}

export default Register