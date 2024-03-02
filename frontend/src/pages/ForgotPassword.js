import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom";
import Meta from '../components/Meta'
const ForgotPassword = () => {
  return (
    <>
    <Meta title={'Forgot Password'} />
    <BreadCrumb title='Forgot Password' />

    <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">We will send you an email to reset your Password</p>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="email" name="email" id="" placeholder='Enter email' className='form-control' />
                </div>
                
                <div>
                  <div className=" mt-1 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to="/login">Cancel</Link>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
