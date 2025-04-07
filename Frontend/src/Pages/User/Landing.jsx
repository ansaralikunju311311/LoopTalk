import React from "react";
import TheamToggle from "../../components/TheamToggle";

const Landing = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-end">
        <TheamToggle />
      </div>

      <h1 className="text-4xl font-bold mb-4">Welcome to LoopTalk</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Real talk, no filters. Meet strangers, connect, chat, and build friendships across the world.
      </p>
    </div>
  );
};

export default Landing;
