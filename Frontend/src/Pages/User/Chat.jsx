import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatBubble } from "../../components/user/ChatMessage";
import {
  SideBarIconButton,
  ChatIconButton,
} from "../../components/user/IconButtons";
import { AllChats, Calls, UserWithStatus } from "../../components/user/UserChat";
import {
  faComments,
  faUserGroup,
  faPhone,
  faCircleNotch,
  faPlus,
  faGear,
  faBarsProgress,
  faFilm,
  faMicrophone,
  faPaperPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chat = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const navigate = useNavigate();
  const handleLanding = () => {
    navigate("/");
  };
  const chatData = [
    { id: 1, name: "Priya Sharma", isGroup: false, message: "Let’s meet after lunch.", time: "01-12-2000", unreadCount: 100, img: "https://randomuser.me/api/portraits/women/68.jpg", status: true, missedCallCount: 2, statusImage: "https://picsum.photos/150?random=1", statusTime: "8:30 AM" },
    { id: 12, name: "UI/UX Crew", isGroup: true, message: "Prototype is ready 🚀", time: "Thu", unreadCount: 6, img: "https://cdn-icons-png.flaticon.com/512/3135/3135792.png", status: false, missedCallCount: 0 },
    { id: 18, name: "Manav Chugh", isGroup: false, message: "Sent the invoice ✅", time: "1:20 PM", unreadCount: 1, img: "https://randomuser.me/api/portraits/men/50.jpg", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=2", statusTime: "9:15 AM" },
    { id: 13, name: "Marketing Team", isGroup: true, message: "Final banner approved.", time: "Apr 7", unreadCount: 2, img: "https://cdn-icons-png.flaticon.com/512/981/981220.png", status: false, missedCallCount: 1 },
    { id: 8, name: "Aditya Rao", isGroup: false, message: "Uploading the zip now.", time: "11:50 AM", unreadCount: 5, img: "https://randomuser.me/api/portraits/men/41.jpg", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=3", statusTime: "10:45 AM" },
    { id: 15, name: "College Buddies", isGroup: true, message: "Movie plan at 6? 🎬", time: "Fri", unreadCount: 14, img: "https://cdn-icons-png.flaticon.com/512/921/921347.png", status: false, missedCallCount: 3 },
    { id: 3, name: "Nisha Raj", isGroup: false, message: "Zoom link not working?", time: "Mon", unreadCount: 4, img: "https://randomuser.me/api/portraits/women/51.jpg", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=4", statusTime: "11:00 AM" },
    { id: 4, name: "Karthik Iyer", isGroup: false, message: "Good morning!", time: "9:05 AM", unreadCount: 0, img: "https://randomuser.me/api/portraits/men/85.jpg", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=5", statusTime: "8:00 AM" },
    { id: 11, name: "React Learners", isGroup: true, message: "Live session now!", time: "12:00 PM", unreadCount: 10, img: "https://cdn-icons-png.flaticon.com/512/2620/2620860.png", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=6", statusTime: "7:45 AM" },
    { id: 2, name: "Aarav Mehta", isGroup: false, message: "Got the files, thanks!", time: "Apr 5", unreadCount: 0, img: "https://randomuser.me/api/portraits/men/34.jpg", status: false, missedCallCount: 1 },
    { id: 19, name: "Aditi Chauhan", isGroup: false, message: "Lunch break?", time: "Sat", unreadCount: 0, img: "https://randomuser.me/api/portraits/women/39.jpg", status: false, missedCallCount: 0 },
    { id: 10, name: "Yuvraj Joshi", isGroup: false, message: "Ping me once done.", time: "Apr 6", unreadCount: 1, img: "https://randomuser.me/api/portraits/men/11.jpg", status: true, missedCallCount: 2, statusImage: "https://picsum.photos/150?random=7", statusTime: "6:30 AM" },
    { id: 14, name: "Design Thinkers", isGroup: true, message: "Who’s presenting today?", time: "Sun", unreadCount: 3, img: "https://cdn-icons-png.flaticon.com/512/3867/3867325.png", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=8", statusTime: "12:15 PM" },
    { id: 7, name: "Tanvi Nair", isGroup: false, message: "Loved the new design!", time: "Fri", unreadCount: 0, img: "https://randomuser.me/api/portraits/women/76.jpg", status: false, missedCallCount: 0 },
    { id: 6, name: "Rohan Kapoor", isGroup: false, message: "Need 5 more mins.", time: "2:30 PM", unreadCount: 3, img: "https://randomuser.me/api/portraits/men/28.jpg", status: true, missedCallCount: 4, statusImage: "https://picsum.photos/150?random=9", statusTime: "1:05 PM" },
    { id: 20, name: "Kunal Dey", isGroup: false, message: "Done with my part!", time: "Apr 8", unreadCount: 1, img: "https://randomuser.me/api/portraits/men/58.jpg", status: true, missedCallCount: 0, statusImage: "https://picsum.photos/150?random=10", statusTime: "9:40 AM" },
    { id: 9, name: "Sanya Gill", isGroup: false, message: "Are we still on call?", time: "Sat", unreadCount: 0, img: "https://randomuser.me/api/portraits/women/45.jpg", status: false, missedCallCount: 0 },
    { id: 5, name: "Megha Reddy", isGroup: false, message: "Shared the doc in chat.", time: "Wed", unreadCount: 1, img: "https://randomuser.me/api/portraits/women/32.jpg", status: true, missedCallCount: 1, statusImage: "https://picsum.photos/150?random=11", statusTime: "10:20 AM" },
    { id: 16, name: "Sahil Bansal", isGroup: false, message: "Cool, see you soon!", time: "10:55 AM", unreadCount: 0, img: "https://randomuser.me/api/portraits/men/17.jpg", status: false, missedCallCount: 0 },
    { id: 17, name: "Divya Pillai", isGroup: false, message: "Where’s the link?", time: "Tue", unreadCount: 2, img: "https://randomuser.me/api/portraits/women/11.jpg", status: true, missedCallCount: 3, statusImage: "https://picsum.photos/150?random=12", statusTime: "11:35 AM" },
  ];
  
  
  
  
  
  
  
  
  return (
    <div className="h-screen flex w-full">
      {/*/////////////////////////////////////////////SIDE BAR//////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <div className="bg-bgSide text-white w-[70px] hidden lg:flex flex-col justify-between items-center pb-3 pt-0 h-screen">
        {/* Top section (logo + icons) */}
        <div>
          <div
            onClick={handleLanding}
            className="h-14 pt-2 rounded flex items-center justify-center cursor-pointer"
          >
            <img
              src="/LoopTalk-Logo.png"
              alt="LoopTalk Logo"
              className="h-8 w-auto"
            />
          </div>

          <SideBarIconButton
            icon={faComments}
            badgeCount={8}
            isChat={true}
            isActive={activeTab === "chats"}
            onClick={() => setActiveTab("chats")}
          />
          <SideBarIconButton
            icon={faUserGroup}
            badgeCount={100}
            isChat={true}
            isActive={activeTab === "groups"}
            onClick={() => setActiveTab("groups")}
          />
          <SideBarIconButton
            icon={faPhone}
            badgeCount={1}
            isActive={activeTab === "calls"}
            onClick={() => setActiveTab("calls")}
          />
          <SideBarIconButton
            icon={faCircleNotch}
            isStatus={true}
            isActive={activeTab === "status"}
            onClick={() => setActiveTab("status")}
          />
          <SideBarIconButton
            icon={faPlus}
            onClick={() => console.log("Comments clicked")}
          />
        </div>

        {/* Bottom gear icon */}
        <SideBarIconButton
          icon={faGear}
          isActive={activeTab === "settings"}
          onClick={() => console.log("Comments clicked")}
        />
      </div>

      {/*////////////////////////////////////////////USERS SIDE/////////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <div className="bg-bgChat text-white w-full  md:w-[290px]  flex flex-col h-screen">
        {/* Search/Input bar */}
        <div className="h-16 flex justify-center items-center px-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-3 py-2 rounded bg-bgSide bg-opacity-30 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-900"
          />
        </div>

        {/* User list section with scroll */}
        <div className="flex-1 overflow-y-auto scrollbar-none">
          <div className="space-y-2">
            {activeTab === "chats" &&
              chatData.map((chat) => (
                <AllChats
                  key={chat.id}
                  username={chat.name}
                  isGroup={chat.isGroup}
                  time={chat.time}
                  message={chat.message}
                  unreadCount={chat.unreadCount}
                  profile={chat.img}
                />
              ))}
             {activeTab === "groups" &&
              chatData
                .filter((chat) => chat.isGroup)
                .map((chat) => (
                  <AllChats
                    key={chat.id}
                    username={chat.name}
                    isGroup={chat.isGroup}
                    time={chat.time}
                    message={chat.message}
                    unreadCount={chat.unreadCount}
                    profile={chat.img}
                  />
                ))}


            {activeTab === "calls" &&
              chatData
              .filter((chat) => chat.missedCallCount !== 0)
              .map((chat) => (
                <Calls
                  key={chat.id}
                  username={chat.name}
                  isGroup={chat.isGroup}
                  time={chat.time}
                  missedCallCount={chat.missedCallCount}
                  profile={chat.img}
                />
              ))}

            {activeTab === "status" &&
              chatData
              .filter((chat) => chat.status)
              .map((chat) => (
                <UserWithStatus
                  key={chat.id}
                  username={chat.name}
                  statusTime={chat.statusTime}
                  statusImage={chat.statusImage}
                />
              ))}
          </div>
        </div>
      </div>

      {/*///////////////////////////////////////////CHATTING AREA///////////////////////////////////////////////*/}
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <div className="flex-1 hidden md:flex flex-col h-screen bg-[url('/chat-bg.jpg')] p-2">
        {/* Top Bar */}
        <div className="rounded-lg text-white h-16 flex items-center gap-2">
          <div className="bg-bgChat h-14 rounded-lg flex items-center justify-between pl-4 flex-1 w-full">
            <div className="flex gap-4">
              <div className="bg-black rounded-full h-12 w-12 shrink-0 overflow-hidden">
                <img
                  src="/kim.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-md">Kim Jong Un</p>
                <p className="text-gray-500">Last seen resendly</p>
              </div>
            </div>

            {/* <button
  className="p-3 rounded-lg bg-transparent 
             transition-transform hover:scale-105"
>
  <span className="flex items-center gap-2 text-xl font-semibold">
    <FontAwesomeIcon
      icon={faStar}
      className="text-2xl rounded-full p-1
                 mask-text bg-gradient-to-r from-fuchsia-800 via-pink-600 to-fuchsia-800 
                 animate-pulse"
    />
    <span
      className="text-xl bg-gradient-to-r from-fuchsia-800 via-pink-600 to-fuchsia-800 
                 bg-clip-text text-transparent animate-pulse"
    >
      Premium
    </span>
  </span>
</button> */}
          </div>

          <ChatIconButton
            icon={faPhone}
            onClick={() => console.log("Comments clicked")}
          />
          <ChatIconButton
            icon={faBarsProgress}
            onClick={() => console.log("Comments clicked")}
          />
        </div>

        <div className="flex-1 flex flex-col text-white overflow-y-auto bg-transparent scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-transparent">
          <ChatBubble
            message="Hey... are you awake?"
            time="12:01 AM"
            isSender={false}
          />
          <ChatBubble message="Who is this?" time="12:01 AM" isSender={true} />

          <ChatBubble
            message="You don’t remember me?"
            time="12:02 AM"
            isSender={false}
          />
          <ChatBubble
            message="No. Stop texting me."
            time="12:02 AM"
            isSender={true}
          />

          <ChatBubble
            message="But you used to beg me to stay."
            time="12:03 AM"
            isSender={false}
          />
          <ChatBubble
            message="What the hell? This isn’t funny."
            time="12:03 AM"
            isSender={true}
          />

          <ChatBubble
            message="Funny? I’m not laughing."
            time="12:04 AM"
            isSender={false}
          />
          <ChatBubble
            message="If this is a joke, it’s not cool."
            time="12:04 AM"
            isSender={true}
          />

          <ChatBubble
            message="Check your closet."
            time="12:05 AM"
            isSender={false}
          />
          <ChatBubble message="F*** off." time="12:05 AM" isSender={true} />

          <ChatBubble
            message="Still locked. Just like you left me."
            time="12:06 AM"
            isSender={false}
          />
          <ChatBubble
            message="I don’t know you."
            time="12:06 AM"
            isSender={true}
          />

          <ChatBubble message="You will." time="12:07 AM" isSender={false} />
          <ChatBubble
            message="You’re scaring me."
            time="12:07 AM"
            isSender={true}
          />

          <ChatBubble
            message="Good. Fear means you’re still alive."
            time="12:08 AM"
            isSender={false}
          />
          <ChatBubble
            message="Stop or I’m blocking you."
            time="12:08 AM"
            isSender={true}
          />

          <ChatBubble
            message="Block me. I’m still here."
            time="12:09 AM"
            isSender={false}
          />
          <ChatBubble
            message="You’re sick. Get help."
            time="12:09 AM"
            isSender={true}
          />

          <ChatBubble
            message="You made me this way."
            time="12:10 AM"
            isSender={false}
          />
          <ChatBubble
            message="Who the hell are you?"
            time="12:10 AM"
            isSender={true}
          />
          <ChatBubble
            message="You knew I’d come back."
            time="12:11 AM"
            isSender={false}
          />
          <ChatBubble
            message="This isn't real. You’re not real."
            time="12:11 AM"
            isSender={true}
          />

          <ChatBubble
            message="Then why are your hands shaking?"
            time="12:12 AM"
            isSender={false}
          />
          <ChatBubble
            message="I’m calling the cops."
            time="12:12 AM"
            isSender={true}
          />

          <ChatBubble
            message="They won’t get here in time."
            time="12:13 AM"
            isSender={false}
          />
          <ChatBubble
            message="Enough. What do you want?!"
            time="12:13 AM"
            isSender={true}
          />

          <ChatBubble message="The truth." time="12:14 AM" isSender={false} />
          <ChatBubble
            message="I don’t owe you anything."
            time="12:14 AM"
            isSender={true}
          />

          <ChatBubble
            message="You owe me your silence. You broke it."
            time="12:15 AM"
            isSender={false}
          />
          <ChatBubble
            message="I don’t understand what you mean."
            time="12:15 AM"
            isSender={true}
          />

          <ChatBubble
            message="You lied. You promised you’d forget."
            time="12:16 AM"
            isSender={false}
          />
          <ChatBubble message="Forget what?" time="12:16 AM" isSender={true} />

          <ChatBubble
            message="The lake. The scream. The blood."
            time="12:17 AM"
            isSender={false}
          />
          <ChatBubble
            message="What the hell are you talking about?!"
            time="12:17 AM"
            isSender={true}
          />

          <ChatBubble
            message="Don’t pretend. I saw your face."
            time="12:18 AM"
            isSender={false}
          />
          <ChatBubble
            message="You’re insane."
            time="12:18 AM"
            isSender={true}
          />

          <ChatBubble
            message="No. Just... patient."
            time="12:19 AM"
            isSender={false}
          />
          <ChatBubble
            message="Where are you right now?"
            time="12:19 AM"
            isSender={true}
          />

          <ChatBubble
            message="Closer than you think."
            time="12:20 AM"
            isSender={false}
          />
          <ChatBubble
            message="If you show up here, I swear—"
            time="12:20 AM"
            isSender={true}
          />
          <ChatBubble
            message="You're shaking again."
            time="12:21 AM"
            isSender={false}
          />
          <ChatBubble
            message="Stop watching me."
            time="12:21 AM"
            isSender={true}
          />

          <ChatBubble
            message="You're making it easy."
            time="12:22 AM"
            isSender={false}
          />
          <ChatBubble
            message="What do you want from me?!"
            time="12:22 AM"
            isSender={true}
          />

          <ChatBubble
            message="Just to talk. Like old times. ☕"
            time="12:23 AM"
            isSender={false}
          />
          <ChatBubble
            message="We never talked. We ran."
            time="12:23 AM"
            isSender={true}
          />

          <ChatBubble
            message="But you tripped. And I didn’t."
            time="12:24 AM"
            isSender={false}
          />
          <ChatBubble
            message="No... no, I remember now..."
            time="12:24 AM"
            isSender={true}
          />

          <ChatBubble
            message="Good. Memory is such a funny thing."
            time="12:25 AM"
            isSender={false}
          />
          <ChatBubble
            message="This can’t be happening. I was just a kid."
            time="12:25 AM"
            isSender={true}
          />

          <ChatBubble
            message="Kids still bleed the same. 💧"
            time="12:26 AM"
            isSender={false}
          />
          <ChatBubble
            message="You need help. You’re sick."
            time="12:26 AM"
            isSender={true}
          />

          <ChatBubble
            message="Sick of pretending. Unlike you."
            time="12:27 AM"
            isSender={false}
          />
          <ChatBubble
            message="How are you even texting me? You're dead."
            time="12:27 AM"
            isSender={true}
          />

          <ChatBubble
            message="Am I? Check the hallway."
            time="12:28 AM"
            isSender={false}
          />
          <ChatBubble
            message="No. You’re just messing with me."
            time="12:28 AM"
            isSender={true}
          />

          <ChatBubble
            message="Then why is your door open?"
            time="12:29 AM"
            isSender={false}
          />
          <ChatBubble
            message="I locked it—wait—"
            time="12:29 AM"
            isSender={true}
          />
          <ChatBubble
            message="The lights just flickered."
            time="12:30 AM"
            isSender={true}
          />
          <ChatBubble
            message="Good. You’re almost ready."
            time="12:30 AM"
            isSender={false}
          />

          <ChatBubble
            message="Ready for what?!"
            time="12:31 AM"
            isSender={true}
          />
          <ChatBubble
            message="To remember what you did. 🕳️"
            time="12:31 AM"
            isSender={false}
          />

          <ChatBubble
            message="No, no, you’ve got it wrong!"
            time="12:32 AM"
            isSender={true}
          />
          <ChatBubble
            message="Do I? Or are you just lying again?"
            time="12:32 AM"
            isSender={false}
          />

          <ChatBubble
            message="There’s a shadow in the mirror."
            time="12:33 AM"
            isSender={true}
          />
          <ChatBubble message="Say hi 👋" time="12:33 AM" isSender={false} />

          <ChatBubble
            message="This isn’t real. This isn’t real."
            time="12:34 AM"
            isSender={true}
          />
          <ChatBubble
            message="Keep telling yourself that. It's what saved you last time."
            time="12:34 AM"
            isSender={false}
          />

          <ChatBubble
            message="The reflection is smiling…"
            time="12:35 AM"
            isSender={true}
          />
          <ChatBubble
            message="But you’re not. 🤭"
            time="12:35 AM"
            isSender={false}
          />

          <ChatBubble
            message="I can’t breathe."
            time="12:36 AM"
            isSender={true}
          />
          <ChatBubble
            message="That’s not me. That’s guilt."
            time="12:36 AM"
            isSender={false}
          />

          <ChatBubble
            message="What do you want from me!?"
            time="12:37 AM"
            isSender={true}
          />
          <ChatBubble
            message="I want you to type it. The truth."
            time="12:37 AM"
            isSender={false}
          />

          <ChatBubble
            message="I don’t know what truth you mean!"
            time="12:38 AM"
            isSender={true}
          />
          <ChatBubble
            message="Then let me help: 'I watched them fall. I did nothing.'"
            time="12:38 AM"
            isSender={false}
          />

          <ChatBubble
            message="No. No. That’s not how it happened!"
            time="12:39 AM"
            isSender={true}
          />
          <ChatBubble
            message="It’s already typed. Check your last message. 🩸"
            time="12:39 AM"
            isSender={false}
          />

          <ChatBubble
            message="...my message changed."
            time="12:40 AM"
            isSender={true}
          />
          <ChatBubble
            message="Now your hands will too."
            time="12:40 AM"
            isSender={false}
          />
          <ChatBubble
            message="You’re not typing this, are you?"
            time="12:41 AM"
            isSender={true}
          />
          <ChatBubble
            message="I never stopped."
            time="12:41 AM"
            isSender={false}
          />

          <ChatBubble
            message="The keyboard is cold."
            time="12:41 AM"
            isSender={true}
          />
          <ChatBubble
            message="Because it's not yours anymore."
            time="12:42 AM"
            isSender={false}
          />

          <ChatBubble
            message="STOP MESSING WITH MY HEAD!"
            time="12:42 AM"
            isSender={true}
          />
          <ChatBubble
            message="Then stop thinking."
            time="12:42 AM"
            isSender={false}
          />

          <ChatBubble
            message="I unplugged the router. Still got this message."
            time="12:43 AM"
            isSender={true}
          />
          <ChatBubble
            message="Of course. I’m not in your wifi. I’m in your memory."
            time="12:43 AM"
            isSender={false}
          />

          <ChatBubble
            message="There's static in my ears..."
            time="12:44 AM"
            isSender={true}
          />
          <ChatBubble
            message="That’s me, whispering secrets. 🧠"
            time="12:44 AM"
            isSender={false}
          />

          <ChatBubble
            message="It’s writing by itself again."
            time="12:44 AM"
            isSender={true}
          />
          <ChatBubble
            message="Good. Let it speak."
            time="12:44 AM"
            isSender={false}
          />

          <ChatBubble
            message="I didn’t send this next message—"
            time="12:45 AM"
            isSender={true}
          />
          <ChatBubble
            message="“I wish they were still alive.”"
            time="12:45 AM"
            isSender={true}
          />

          <ChatBubble message="Who are you?" time="12:45 AM" isSender={true} />
          <ChatBubble
            message="You named me. Remember?"
            time="12:45 AM"
            isSender={false}
          />

          <ChatBubble
            message="It says the chat is with 'Me' now."
            time="12:46 AM"
            isSender={true}
          />
          <ChatBubble
            message="And still... you reply."
            time="12:46 AM"
            isSender={false}
          />

          <ChatBubble
            message="My reflection is typing back."
            time="12:46 AM"
            isSender={true}
          />
          <ChatBubble
            message="It types better than you. 🪞"
            time="12:46 AM"
            isSender={false}
          />

          <ChatBubble
            message="The messages are arriving before I press enter..."
            time="12:47 AM"
            isSender={true}
          />
          <ChatBubble
            message="We already had this conversation. In 2017."
            time="12:47 AM"
            isSender={false}
          />

          <ChatBubble
            message="This timestamp says 3:66 AM."
            time="??:??"
            isSender={true}
          />
          <ChatBubble
            message="Because you’re finally out of time. ⌛"
            time="??:??"
            isSender={false}
          />

          <ChatBubble
            message="I’m done. This is over."
            time="12:48 AM"
            isSender={true}
          />
          <ChatBubble
            message="You don’t get to decide that."
            time="12:48 AM"
            isSender={false}
          />

          <ChatBubble
            message="Then who does?"
            time="12:48 AM"
            isSender={true}
          />
          <ChatBubble
            message="You did. When you opened this chat."
            time="12:48 AM"
            isSender={false}
          />

          <ChatBubble
            message="Final message."
            time="12:49 AM"
            isSender={true}
          />
          <ChatBubble
            message="No. Final memory."
            time="12:49 AM"
            isSender={false}
          />

          <ChatBubble message="..." time="12:50 AM" isSender={true} />
          <ChatBubble message="..." time="12:50 AM" isSender={true} />
          <ChatBubble message="..." time="12:50 AM" isSender={true} />
          <ChatBubble message="..." time="12:50 AM" isSender={true} />
          <ChatBubble message="..." time="12:50 AM" isSender={false} />
        </div>

        {/* Bottom Bar */}
        <div className="h-14 rounded-lg text-white flex justify-between items-center gap-2">
          <ChatIconButton
            icon={faFaceSmile}
            onClick={() => console.log("Comments clicked")}
          />
          <ChatIconButton
            icon={faFilm}
            onClick={() => console.log("Comments clicked")}
          />

          <div className="bg-bgChat h-14 flex justify-between items-center flex-1 w-full pl-4 rounded-lg">
            <input
              className="flex-1 w-full bg-transparent outline-none"
              type="text"
              placeholder="Type your message..."
            />
            <ChatIconButton
              icon={faPaperPlane}
              onClick={() => console.log("Comments clicked")}
            />
          </div>

          <ChatIconButton
            icon={faMicrophone}
            onClick={() => console.log("Comments clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
