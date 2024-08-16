
const EmailInput = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
         <h4 className="font-bold text-2xl text-Primary">Get Your Password </h4>
         <p className="text-center text-xl text-gray-400">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
         <form className=' flex flex-col gap-4 w-full'>
            <input type='text' className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='User Name Or Email'/>
            <button className='py-2.5 bg-Secondary text-white hover:bg-main transition-all duration-300'>Reset Password</button>
        </form>
    </div>
  )
}

export default EmailInput