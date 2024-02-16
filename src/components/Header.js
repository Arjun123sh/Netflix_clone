import React from 'react'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName,photoURL } = user
            dispatch(addUser({ uid, email, displayName,photoURL }));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    });

    return ()=>unsubscribe();
}, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='absolute px-8 py-2 z-10 w-full bg-gradient-to-b from-black flex justify-between '>
      <img className='w-44' src={LOGO} alt='logo' />
      {
        user && (
          <div className='flex p-2'>
            <img className='w-12 h-12' alt='usericon' src={user?.photoURL} />
            <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
          </div>
        )
      }
    </div>
  )
}

export default Header
