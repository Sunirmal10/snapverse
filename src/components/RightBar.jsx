import React from 'react'
import { Link } from 'react-router-dom'
import { storyData, userProfile } from '../Data'
import { IoMdPersonAdd } from 'react-icons/io';

const RightBar = () => {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className='hidden xl:flex flex-col w-[18rem] m-2 ml-8'>
     
      <header className='flex w-full justify-between items-center mt-8'>
          <div className='flex justify-center items-center gap-2'>
          <img
          className='w-12 h-12 border-2 border-gray-300 dark:border-transparent rounded-full'
          src={userProfile.pfp} alt="" />
       
       <span className='text-sm dark:text-white font-semibold'>{userProfile.handleId}</span>
           
          </div>          
          <Link to={"/profile"}>
        <span className='flex justify-center items-center p-1 rounded-md bg-violet-400 text-xs font-bold text-white cursor-pointer mt-2 w-12 h-6 hover:bg-violet-500'>View</span>
        </Link>
      </header>

      <main className='flex flex-col justify-center items-center'>
        <span className='flex w-full justify-between ic text-sm mt-4 mb-2 text-zinc-400 font-semibold'>
          <span>Recommended</span>
          <span className='text-xs text-slate-900 dark:text-white font-bold cursor-pointer mr-1 hover:text-slate-500 dark:hover:text-slate-200'>View All</span>
        </span>

        {
          storyData.slice(0,5).map((item)=> (
            <div className='flex w-full justify-between items-center relative my-2' key={item.id}>
            <Link to={"#"}>
                <div className='flex justify-center items-center gap-2'>
                <img
                className='w-12 h-12 border-2 border-gray-300 dark:border-transparent rounded-full mt-1'
                src={item.pfp} alt="" />
             
             <span className='text-sm dark:text-white font-semibold mb-5'>{item.name}</span>
                 <span className='absolute bottom-0 left-14 text-zinc-400 
                 font-medium mb-1
                 tracking-tighter text-xs'>
                  Suggested for you
                 </span>
                </div>          
              </Link>
              <span className='flex justify-center items-center px-1 rounded-md bg-violet-400 text-xs font-bold text-white cursor-pointer mt-2 w-20 h-6 hover:bg-violet-500 gap-1'>
              <IoMdPersonAdd />
                Connect</span>
            </div>
          ))
        }

       
      </main>
      <footer className='flex flex-col text-xs font-medium text-zinc-400 gap-2 mt-5 mb-1'>
        <span className='w-full flex tracking-tighter font-normal flex-wrap gap-1'>
         <Link to={"#"}>About</Link>•
         <Link to={"#"}>Help</Link>•
         <Link to={"#"}>Press</Link>•
         <Link to={"#"}>API</Link>•
         <Link to={"#"}>Jobs</Link>•
         <Link to={"#"}>Privacy</Link>•
         <Link to={"#"}>Terms</Link>•
         <Link to={"#"}>Locations</Link>•
         <Link to={"#"}>Language</Link>•
         <Link to={"#"}>Snap Verified</Link>
        </span>
        <span>
        © {year} SNAPVERSE PROJECT
        </span>
      </footer>
    </div>
  )
}

export default RightBar


