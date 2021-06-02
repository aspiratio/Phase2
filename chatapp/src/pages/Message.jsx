import React from "react";
const Message = ({ message }) => {
  return (
    <li>
      {message.user} : {message.content}
    </li>
  );
};

export default Message;
