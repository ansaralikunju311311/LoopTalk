import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SIDE BAR ICON BUTTONS////////////////////////////////////////////////////////////////
export const SideBarIconButton = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-zinc-900 h-14 w-14 rounded flex items-center justify-center mt-2 hover:text-fuchsia-900 text-gray-400 transition-colors duration-200 cursor-pointer"
    >
      <FontAwesomeIcon icon={icon} className="text-2xl" />
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

