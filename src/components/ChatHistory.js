import Message from "./Message";
import "./ChatHistory.css";
import { useEffect, useRef } from "react";

const ChatHistory = ({ messages, sendFeed }) => {
  const scrollRef = useRef(null);
  useEffect(
    () => scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight),
    [messages.length]
  );
  return (
    <div className="chat-history" ref={scrollRef}>
      {messages.map((message, index) => (
        <Message
          message={message}
          key={index}
          sendFeedback={(i) => sendFeed(i,messages[index-1].text)}
        />
      ))}
    </div>
  );
};

export default ChatHistory;
