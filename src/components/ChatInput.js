import { useState } from "react";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (input) {
      sendMessage({
        username: "user1",
        text: input,
      });
      setInput("");
      document.getElementById("chatInput").click();
    }
  };

  return (
    <form className="chatInput">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="chatInput"
        placeholder="Type a message"
        type="text"
      />
      <button onClick={send} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ChatInput;
