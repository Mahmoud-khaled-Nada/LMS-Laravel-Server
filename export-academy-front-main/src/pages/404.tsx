import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-blue-100'>
         <div className='w-11/12 py-32 items-center lg:w-10/12 flex mx-auto flex-col lg:flex-row gap-x-32 gap-y-12'>
         <div className='lg:w-1/2'><img src='images/illust_404_error_30 1.svg'/></div>
             <div className='lg:w-1/2 flex flex-col gap-6 sm:px-20'>
                <div className='text-primary font-semibold text-2xl'>Oops! It looks like you're lost.</div>
                <div className='text-primary  text-md'>The page you're looking for isn't available. Try to search again or use the go to.</div>
                <Link to='/' className='flex justify-center items-center h-12 bg-Primary text-white rounded' >Go Back To Homepage</Link>
             </div>
        </div>
    </div>
  )
}

export default NotFound