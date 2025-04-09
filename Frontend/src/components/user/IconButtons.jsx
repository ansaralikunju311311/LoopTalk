import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SIDE BAR ICON BUTTONS////////////////////////////////////////////////////////////////
export const SideBarIconButton = ({
  icon,
  badgeCount = 0,
  onClick,
  isChat = false,
  isStatus = false,
  isActive = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-zinc-900 relative h-14 w-14 rounded flex items-center justify-center mt-2  transition-colors duration-200 cursor-pointer ${isActive ? "text-fuchsia-900" : "hover:text-fuchsia-900 text-gray-400"} `}
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />

      {/* Status Dot */}
      {isStatus && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-fuchsia-900 rounded-full"></div>
      )}

      {/* Badge */}
      {!isStatus && badgeCount > 0 && (
        <div
          className={`absolute top-2 right-1 text-white text-xs rounded-full min-w-[1.25rem] h-5 w-4 px-1 flex items-center justify-center ${
            isChat ? 'bg-fuchsia-900' : 'bg-red-700'
          }`}
        >
          {badgeCount > 99 ? '99+' : badgeCount}
        </div>
      )}
    </button>
  );
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// CHAT ICON BUTTONS////////////////////////////////////////////////////////////////
export const ChatIconButton = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-bgChat h-14 w-14 flex justify-center items-center rounded-lg cursor-pointer group"
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-500 text-2xl group-hover:text-gray-400 transition-colors duration-200"
      />
    </button>
  );
};

