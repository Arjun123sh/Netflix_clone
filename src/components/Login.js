import React, { useRef, useState } from 'react'
import Header from './Header'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase"
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setisSignForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name=useRef(null);
    const toggleSignInForm = () => {
        setisSignForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        if(!email.current.value || !password.current.value){
            return;
        }

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                      }).then(() => {
                      }).catch((error) => {
                        console.log(error);
                      });
                    console.log(user);
                    enqueueSnackbar("SignUp Successfull");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                },
            );
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    enqueueSnackbar("Sign In Successful")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    enqueueSnackbar(errorMessage);
                },
            );
        }
    }
    return (
        <div>
            <SnackbarProvider />
            <Header />
            <div className='absolute' >
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='home image' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                {
                    !isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                }
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflex ? Sign Up Now" : "Already Registered ? Sign In Now."}</p>
            </form>
        </div>
    )
}

export default Login
