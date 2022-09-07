const ChatHistory = ({ messages }) => {
  
  return (
    <div className="chat-history">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <div className="message-username">{message.username}</div>
          <div className="message-text">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
