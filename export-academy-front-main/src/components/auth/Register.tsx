

const Register = () => {
  return (
    <div className=' '>
    <div className='w-11/12 md:w-10/12 mx-auto '>
            <h3 className='text-2xl font-bold text-primary text-center font-Cairo'>تسجيل حساب جديد            </h3>
            <form className='mt-8 flex flex-col gap-4'>
                <input type='text' className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='User Name'/>
                <input type='text' className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='Email'/>

                 <input type="password" className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='Password'/>
                 <input type="password" className='w-full border border-gray-300 p-2.5 focus:border-Secondary' style={{outline: 'none'}} placeholder='confirm password'/>

                 <button className='py-2.5 bg-Secondary text-white hover:bg-main transition-all duration-300'>Sign up</button>
            </form>
    </div>
</div>
  )
}

export default Register