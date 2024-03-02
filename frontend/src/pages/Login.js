// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import BreadCrumb from '../components/BreadCrumb'
// import Meta from '../components/Meta'
// import { Link } from 'react-router-dom'
// import { useRef } from 'react'
// import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Login() {
//   const navigate = useNavigate()
//   const handleSubmit = () => {

//     axios.post(
//       'http://localhost:3300/auth/login', {
//       email: emailRef.current.value,
//       password: passRef.current.value,
//     }
//     ).then((res) => {
//       //console.log(res.status);

//       console.log(res.data.token);
//       localStorage.setItem('jwtToken', res.data.token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
//       emailRef.current.value = ""
//       passRef.current.value = ""

//       toast(res.data.message, {
//         onClose: () => {
//           navigate('/');
//         }
//       })
//     })

//   }
//   const emailRef = useRef(null);
//   const passRef = useRef(null);

//   return (
//     <div>
//     <>
//       <Meta title={'Login'} />
//       <BreadCrumb title='Login' />

//       <div className="login-wrapper py-5 home-wrapper-2">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="auth-card">
//                 <h3 className='text-center mb-3'>Login</h3>
//                 <form action="" className='d-flex flex-column gap-15'>
//                   <div>
//                     <input type="email" name="email" id="" placeholder='Enter email' className='form-control' ref={emailRef} />
//                   </div>
//                   <div className='mt-1'>
//                     <input type="password" name="password" placeholder='Enter password' id="" className='form-control' ref={passRef} />
//                   </div>
//                   <div>
//                     <Link to="/forgot-password">Forgot Password ?</Link>
//                     <div className=" mt-1 d-flex justify-content-center gap-15 align-items-center">
//                       <button className='button border-0' type='submit' onClick={handleSubmit}>Login</button>
//                       <Link to='/signup' className='button signup'>Sign Up</Link>

//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//     </>
//     </div>
//   )
// }

// export default Login


import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
  
    axios.post(
      'http://localhost:3300/auth/login', {
      email: emailRef.current.value,
      password: passRef.current.value,
    }
    ).then((res) => {
      console.log(res.data.token);
      localStorage.setItem('jwtToken', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      emailRef.current.value = ""
      passRef.current.value = ""

      toast(res.data.message, {
        onClose: () => {
          navigate('/');
        }
      })
    })
  }

  return (
    <div>
      <Meta title={'Login'} />
      <BreadCrumb title='Login' />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Login</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="email" name="email" id="" placeholder='Enter email' className='form-control' ref={emailRef} />
                  </div>
                  <div className='mt-1'>
                    <input type="password" name="password" placeholder='Enter password' id="" className='form-control' ref={passRef} />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password ?</Link>
                    <div className=" mt-1 d-flex justify-content-center gap-15 align-items-center">
                      <button className='button border-0' type='submit' onClick={handleSubmit}>Login</button>
                      <Link to='/signup' className='button signup'>Sign Up</Link>
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
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
