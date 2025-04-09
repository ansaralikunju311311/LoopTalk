import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPhone} from "@fortawesome/free-solid-svg-icons";

export const AllChats = ({
  username,
  isGroup,
  time,
  message,
  unreadCount,
  profile,
}) => {
  return (
    <div className="rounded py-1 p-2 hover:bg-zinc-700 transition cursor-pointer flex">
      <div className="bg-black rounded-full h-14 w-14 shrink-0 overflow-hidden">
        <img
          src={profile}
          alt={username}
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      <div className="pl-2 flex-1">
        {/* Top Row: User + Time */}
        <div className="flex justify-between items-center mb-1">
          <p className="font-semibold flex items-center gap-1 w-32 truncate">
            {isGroup && (
              <FontAwesomeIcon
                icon={faUsers}
                className="text-gray-300 text-sm"
              />
            )}
            <span className="truncate">{username}</span>
          </p>

          <p className="text-sm text-gray-500">{time}</p>
        </div>

        {/* Bottom Row: Message + Notification */}
        <div className="flex justify-between items-center">
          <p className="text-md text-gray-500 truncate w-40 sm:w-40">
            {message}
          </p>
          {unreadCount > 0 && (
            <div className="bg-fuchsia-900 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {unreadCount > 99 ? "99+" : unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export const Calls = ({
  username,
  isGroup,
  time,
  missedCallCount,
  profile,
}) => {
  return (
    <div className="rounded py-1 p-2 hover:bg-zinc-700 transition cursor-pointer flex">
      <div className="bg-black rounded-full h-14 w-14 shrink-0 overflow-hidden">
        <img
          src={profile}
          alt={username}
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      <div className="pl-2 flex-1">
        {/* Top Row: User + Time */}
        <div className="flex justify-between items-center mb-1">
          <p className="font-semibold flex items-center gap-1 w-32 truncate">
            {isGroup && (
              <FontAwesomeIcon
                icon={faUsers}
                className="text-gray-300 text-sm"
              />
            )}
            <span className="truncate">{username}</span>
          </p>

          <p className="text-sm text-gray-500">{time}</p>
        </div>
         
        <FontAwesomeIcon
                icon={faPhone}
                className="text-green-700 text-sm"
              />

      </div>
    </div>
  );
};


export const UserWithStatus = ({ username, statusTime, statusImage }) => {
  return (
    
    <div className="rounded py-1 p-2 hover:bg-zinc-700 transition cursor-pointer flex">
      
      <div className="bg-black rounded-full border-2 border-fuchsia-900 h-14 w-14 shrink-0 overflow-hidden">
        <img
          src={statusImage}
          alt={username}
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      <div className="pl-2 flex-1">
        {/* Top Row: User + Time */}
        <div>
          <p className="font-semibold flex items-center gap-1 w-32 truncate">
            <span className="truncate">{username}</span>
          </p>

          <p className="text-sm text-gray-500 mt-2">{statusTime}</p>
        </div>
      </div>
    </div>
  );
};
