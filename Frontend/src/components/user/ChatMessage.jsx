/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// CHAT TEXT MESSAGE ///////////////////////////////////////////////////////////////
export const ChatBubble = ({ message, time, isSender }) => {
    return (
      <div
        className={`pt-1 px-3 mb-2 w-fit max-w-[90%] sm:max-w-sm md:max-w-md ${
          isSender
            ? 'bg-gradient-to-tr from-fuchsia-800 to-pink-600 rounded-tl-lg rounded-tr-lg rounded-bl-lg self-end'
            : 'bg-gradient-to-tr from-pink-600 to-fuchsia-800 rounded-tr-lg rounded-br-lg rounded-tl-lg'
        }`}
      >
        <h1 className="text-md text-white pr-14 break-words">{message}</h1>
        <h1 className="text-gray-400 text-xs pb-1 text-end">{time}</h1>
      </div>
    );
  };
  