import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import { ReactComponent as Oops } from "../assets/oops.svg";

import { useState } from "react";
import "./Chat.css";
import DataApi from "../api/DataApi";
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      username: "user1",
      text: "Hello",
    },
    {
      username: "user2",
      text: "Hi",
    },
    {
      username: "user1",
      text: "How are you?",
    },
    {
      username: "user2",
      text: "I'm fine, thanks",
    },
    {
      username: "user1",
      text: "Hello",
    },
    {
      username: "user2",
      text: "Hi",
    },
    {
      username: "user1",
      text: "How are you?",
    },
    {
      username: "user2",
      text: "I'm fine, thanks",
    },
    {
      username: "user1",
      text: "Hello",
    },
    {
      username: "user2",
      text: "Hi",
    },
    {
      username: "user1",
      text: "How are you?",
    },
    {
      username: "user2",
      text: "I'm fine, thanks",
    },
  ]);
  const [thinking, setThinking] = useState(false);
  const onMessageSend = async (message) => {
    console.log(message);

    setThinking(true);
    const response = await DataApi.get("/getchat", {
      params: {
        q: message.text,
      },
    });
    const tmp = {
      username: "Bot",
      time: new Date().toLocaleTimeString(),
    };
    console.log(response.data);
    const data = response.data.ans;
    if (data) {
      tmp.text = data;
    } else {
      tmp.text = "Oops! I don't know that.";
    }
    tmp.time = new Date().toLocaleTimeString();
    let tmp_messages = messages;
    tmp_messages.push(message);
    tmp_messages.push(tmp);
    setMessages(tmp_messages);
    setThinking(false);
  };
  const postData = (i, ques) => {
    DataApi.post("/getfeedback", {
      feedback: i,
      question: ques,
    });
  };
  return (
    <div className="chat">
      <h1 className="heading">CADDY</h1>
      <ChatHistory
        messages={messages}
        sendFeed={(i, ques) => postData(i, ques)}
      />
      {thinking ? <Oops /> : <></>}
      <ChatInput
        sendMessage={(message) => onMessageSend(message)}
        thinking={thinking}
      />
    </div>
  );
};

export default Chat;
