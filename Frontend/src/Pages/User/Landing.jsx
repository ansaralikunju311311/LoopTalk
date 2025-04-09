import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';


const Landing = () => {
  const navigate = useNavigate();

  const handleChatStart = () => {
    navigate("/chat");
  }

  return (
    <div className="bg-gradient-to-b from-fuchsia-950 to-gray-950 min-h-screen">
      <div className=" flex items-center justify-between mb-5 sm:mb-10 h-16 px-6 sm:px-12 md:px-24 lg:px-32">
        <div className="flex items-center gap-3">
          <img
            src="/LoopTalk-Logo.png"
            alt="LoopTalk Logo"
            className="h-8 w-auto"
          />
          <p className="text-2xl text-white font-semibold">LoopTalk</p>
        </div>
        <div className="flex gap-10 text-white">
          <p>Home</p>
          <p>About</p>
        </div>
        <button className="outline outline-gray-100 p-1 px-6 rounded-full hover:outline-fuchsia-900">
          login
        </button>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-between gap-8 sm:pt-5 md:pt-10 lg:pt-20 px-4 md:px-16 min-[1000px]:px-24 lg:px-32

"
      >
        <div className="flex-1 p-1 sm:p-2 md:p-4 lg:p-6 md:h-[500px] rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Where real minds meet real talks – LoopTalk.
          </h1>
          <p className="text-base md:text-xl text-gray-300">
            Real talk, no filters. Connect with strangers from around the world,
            have meaningful conversations, share ideas, and build genuine
            friendships. LoopTalk is where open minds meet and real connections
            begin.
          </p>
          <div className="flex justify-center mt-10">
        
            <button onClick={handleChatStart} className="bg-fuchsia-900 p-4 text-white rounded-full text-xl hover:bg-fuchsia-950 transition-colors duration-300">
               <FontAwesomeIcon icon={faComments} className="text-white text-2xl mr-4" />
               Start Chatting  
            </button>
          </div>
        </div>

        <div className="flex-1 bg-orange-800 h-[500px] rounded-lg flex items-center justify-center text-white text-xl">
          image
        </div>
      </div>
    </div>
  );
};

export default Landing;
