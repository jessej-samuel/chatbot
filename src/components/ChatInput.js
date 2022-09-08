import { useEffect, useRef, useState } from "react";
import "./ChatInput.css";
const ChatInput = ({ sendMessage, thinking }) => {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef(null);
  useEffect(() => {
    if (thinking) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [thinking]);
  const send = (e) => {
    e.preventDefault();
    if (input) {
      sendMessage({
        username: "user",
        text: input,
        time: new Date().toLocaleTimeString(),
      });
      setInput("");
      console.log(inputRef.current);
      inputRef.current.click();
      // inputRef.current.focus();
    }
  };

  return (
    <form className="chatInputForm" onSubmit={send}>
      <input
        value={input}
        disabled={disabled}
        onChange={(e) => setInput(e.target.value)}
        id="chatInput"
        placeholder="Type a message"
        type="text"
        ref={inputRef}
      />
      <button onClick={send} type="submit" id="ask">
        Ask
      </button>
    </form>
  );
};

export default ChatInput;
