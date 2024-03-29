import React from "react";
import { GoDash } from "react-icons/go";
import { comments, userProfile } from "../Data";
import { FaRegHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdOutlineGifBox } from "react-icons/md";

const MobileComments = ({ showMobCom, setShowMobCom }) => {
  return (
    <div
      className={
        showMobCom
          ? "flex h-full w-full z-40 fixed top-0 left-0 right-0 transition-all delay-250 bg-gray-800/80"
          : "fixed top-[100rem] z-40 w-full transition-all delay-350 mb-20"
      }
    >
      <div className=" bg-white dark:bg-[#151515] w-full h-full mt-24 md:mt-44 rounded-t-3xl md:rounded-md z-50">
        <header className="flex flex-col rounded-t-3xl items-center justify-center pb-2 border-b-2 border-b-slate-800">
          <GoDash
            className="text-5xl mt-[-12px] text-gray-600 dark:text-zinc-400 cursor-pointer"
            onClick={() => setShowMobCom(false)}
          />
          <span className="text-[10px] text-gray-400 dark:opacity-55 opacity-70 font-medium tracking-tighter mt-[-18px]">Tap to close</span>
          <span className="text-[14px] tracking-tight font-bold mt-1 dark:text-white">
            Comments
          </span>
        </header>
        <main className="flex flex-col py-2 px-3 gap-3 overflow-y-scroll h-[380px] scroll-smooth">
          {comments.map((item) => (
            <div key={item.id} className="flex justify-evenly gap-3">
              <div
                className={
                  item.stories
                    ? "flex items-center justify-center w-8 h-8 rounded-full p-[1.5px] border-2 border-pink-500 mt-2"
                    : "flex items-center gap-2 relative w-8 h-8 rounded-full justify-center border-2 border-gray-300 dark:border-transparent mt-2"
                }
              >
                <img
                  className="w-full h-full rounded-full object-fill"
                  src={item.pfp}
                  alt="pro_pic"
                />
              </div>
              <div className="flex-[6]">
                <span className="flex text-xs dark:text-white font-bold gap-1">
                  {item.handleId}
                  {item.verified && (
                    <MdVerified className=" text-blue-500 mt-[2px]" />
                  )}
                  <span className="ml-1 text-gray-500">{item.time}</span>
                </span>
                <div className="text-sm tracking-tight dark:text-white flex flex-wrap">
                  {item.text}
                </div>
                <button className="p-0 m-0 text-xs font-semibold text-zinc-500">
                  Reply
                </button>

                {item.replies !== 0 && (
                  <span className="flex justify-start items-center mt-3 text-xs text-zinc-500">
                    <div className="dash h-[1px] w-[25px] mr-1 bg-gray-400"></div>
                    <span className="font-bold">
                      view {item.replies} more replies
                    </span>
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col text-[10px] items-center justify-start mt-2 text-zinc-500 font-semibold ">
                <FaRegHeart className="text-xs mb-[2px]" />
                <span>{item.likes === 0 ? "0" : item.likes}</span>
              </div>
            </div>
          ))}
        </main>

        <div className="flex py-2 px-3 gap-3 w-full h-14 border-t-2 border-t-gray-300 dark:border-t-zinc-500">
          <div className="flex justify-center mt-1 items-center gap-2 relative w-8 h-8 rounded-full border-2 border-gray-200 dark:border-transparent">
            <img
              className="w-full h-full rounded-full object-fill"
              src={userProfile.pfp}
              alt="pro_pic"
            />
          </div>
          <input
            type="text"
            placeholder="Add a comment"
            className="tracking-tighter text-sm dark:text-zinc-500 bg-transparent rounded pl-2 mt-1 focus:outline-none flex-[6]"
          />
           <div className="flex-1 flex justify-center items-center text-3xl text-zinc-700 dark:text-zinc-500">
          <MdOutlineGifBox />
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default MobileComments;
