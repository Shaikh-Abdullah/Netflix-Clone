import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    // const register = (e) => {
    //     e.preventDefault();

    //     auth.createUserWithEmailAndPassword(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //     ).then((authUser) => {
    //         console.log(authUser)
    //     })
    //         .catch((error) => {
    //             alert(error.message);
    //         })
    // };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
            .catch((error) => {
                alert(error.message)
            })
    }

    const notify = () => toast("Email:-getflix@gmail.com / pw:-password");


    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="mail" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='password' />
                <button type='submit' onClick={signIn}>Sign In</button>

                <h4>
                    <span className='signupScreen__gray'>New to Netflix? </span>
                    <span className='signupScreen__link'>Sign Up now</span>
                </h4>
            </form>
            <div>
                <button className='toaster-btn' onClick={notify}>Click For Email & Password</button>
                <ToastContainer
                    position="top-right"
                    autoClose={10000}
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
        </div>
    )
}

export default SignupScreen