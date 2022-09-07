import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";

import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const onMessageSend = (message) => {
    console.log(message);
	setMessages([...messages, message]);
  };
//   let messages = [
//     {
//       username: "user1",
//       text: "Hello",
//     },
//     {
//       username: "user2",
//       text: "Hi",
//     },
//     {
//       username: "user1",
//       text: "How are you?",
//     },
//     {
//       username: "user2",
//       text: "I'm fine, thanks",
//     },
//   ];
  return (
    <div className="chat">
      <h1>Chat</h1>
      <ChatHistory messages={messages} />
      <ChatInput sendMessage={(message) => onMessageSend(message)} />
    </div>
  );
};

export default Chat;
