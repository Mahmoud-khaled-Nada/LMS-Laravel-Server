import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { changeLogin } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';

export const Login=()=>{
   const dispatch=useDispatch()
   const [type,setType]=useState('password')
   const changeType=()=>{
    type==='password'?setType('text'):setType('password');
   }
    return (
       <div className='' >
            <div className='w-11/12 md:w-10/12 mx-auto'>
                    <h3 className='text-2xl font-bold text-primary text-center font-Cairo'>تسجيل الدخول بحساب الموقع الخاص بك </h3>
                    <form className='mt-8 flex flex-col gap-4'>
                        <input type='text' className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='User Name Or Email'/>
                         <div className="relative">
                         <input type={type} className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='Password'/>
                          <FaRegEye onClick={changeType} className={`absolute cursor-pointer end-2 top-3 text-2xl ${type==='password'?'text-gray-400':'text-primary'}`}/>
                         </div>
                         <div className='flex justify-between'>
                             <Link to="/reset-password" className='text-blue-900' onClick={()=> dispatch(changeLogin(false))}> ٌReset Password</Link>
                             <div>
                            <label className='flex gap-2 text-Primary cursor-pointer'>
                              <input type="checkbox" />
                              Remember Me
                            </label>
      </div>
                         </div>
                         <button className='py-2.5 bg-Secondary text-white hover:bg-main transition-all duration-300'>Login</button>
                    </form>
            </div>
       </div>
      )
}



