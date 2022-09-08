import "./Message.css";
const Message = ({ message, sendFeedback }) => {
  return (
    <div
      className={`message ${
        message.username.toLowerCase() === "user" ? "user" : "bot"
      }`}
    >
      <div className="message-username">{message.username}</div>
      <div className="message-text">{message.text}</div>
      {/* {message.username.toLowerCase() === "bot" ? (
        // Display yes/ no button that will post to /getfeedback
        <div className="feedback">
          <button className="feedback-button" onClick={() => sendFeedback(1)}>
            Yes
          </button>
          <button className="feedback-button" onClick={() => sendFeedback(0)}>
            No
          </button>
        </div>
      ) : (
        <></>
      )} */}
      <div className="timestamp">{message.time}</div>
    </div>
  );
};
export default Message;
