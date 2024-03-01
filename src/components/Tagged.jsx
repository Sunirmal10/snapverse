import React from 'react'
import { GoDash } from 'react-icons/go'
import { taggedUSers } from '../Data'
import { MdVerified } from 'react-icons/md'

const Tagged = ({showTagged, setShowTagged}) => {

  return (
    <div
      className={
        showTagged
          ? "flex h-full w-full z-40 fixed top-0 left-0 right-0 transition-all delay-250 bg-gray-800/80"
          : "fixed top-[100rem] z-40 w-full transition-all delay-350"
      }
      
    >

      <div className=" bg-white w-full h-full mt-96 rounded-t-3xl z-50" >
        <header className="flex flex-col rounded-t-3xl items-center justify-center pb-2 border-b-2 border-b-gray-300">

          <GoDash
            className="text-5xl mt-[-12px] text-gray-600"
            onClick={() => setShowTagged(false)}
          
            />
          <span className="text-[14px] tracking-tight font-bold mt-[-10px]">
            In this photo
          </span>
            </header>
            <div className='py-3 px-5'>
            {
                taggedUSers.map((item)=>(
                    <div className='flex gap-4 flex-1' key={item.userId}
                    >
                    <img
                     className={
                        item.stories
                          ? "flex items-center justify-center w-14 h-14 rounded-full p-[1px] border-2 mt-3 border-pink-500 object-fill"
                          : "flex items-center gap-2 relative w-14 h-14 rounded-full justify-center mt-3 object-fill"
                      }
                    src={item.pfp} alt="" />
                    <div className='flex-[6] flex flex-col justify-center items-start py-1 tracking-tight text-sm mt-2'>
                        <span className='flex font-bold'>{item.handleId}
                        {item.verified && (
                    <MdVerified className=" text-blue-500 mt-[4px] ml-1" />
                  )}
                        </span>
                        <span className='flex flex-wrap text-gray-500 font-medium'>{item.name}</span>
                    </div>
                    <button className='flex w-20 sm:w-32 justify-center items-center rounded-md bg-blue-500 h-8 font-medium text-sm text-white mt-6 active:scale-90'>Follow</button>
                </div>
                ))
            }
            </div>
         
           
            </div>
            </div>
  )
}

export default Tagged