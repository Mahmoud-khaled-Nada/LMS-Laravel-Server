import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import { IoIosSearch } from 'react-icons/io';



const Search = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <React.Fragment>
    <button  onClick={handleClickOpen}>
    <IoIosSearch className="text-2xl text-Primary mt-1 hover:text-Secondary transition-all ease-in-out" />
    </button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
     className='rounded-3xl'
    >
     <div className=' h-[500px] my-4 overflow-clip'>
        <div className='border-b border-gray-300 flex gap-4  px-3 items-center' > 
            <IoIosSearch className="text-2xl text-Secondary mt-1 mb-4" />
            <input  type='text' className='border-none w-[500px] pb-4' style={{outline: 'none'}} placeholder='Search for anything ...'/>
        </div>
         <div className='flex flex-col gap-2 px-2 my-4 h-[450px] overflow-auto search-scroll'>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
               <div className='border border-gray-200 gap-2 cursor-pointer bg-gray-50 items-center rounded-lg flex flex-col md:flex-row p-2 hover:bg-blue-50 hover:border-Secondary hover:text-Secondary transition-all ease-in-out'>
                   <img src='/images/search.jpg' className='w-12 h-12 rounded-lg  object-cover'/>
                   <div className='flex flex-col gap-2'>
                        <h3 className='text-xl text-Primary font-semibold'>NestJS: The Complete Developer's Guide</h3>
                   </div>
               </div>
         </div>
     </div>
    
    
    </Dialog>
  </React.Fragment>
  )
}

export default Search