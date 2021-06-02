import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/firebase";
import "firebase/firestore";
import Message from "./Message";
import { AuthContext } from "../AuthService";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("createAt", "asc")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setMessages(messages);
      });
    console.log(messages);
  }, []);

  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection("messages").add({
      content: value,
      user: user.displayName,
      createAt: new Date(),
    });
  };

  return (
    <>
      <h1>Room</h1>
      <ul>
        <li>sample user : sample message</li>
        {messages.map((message, index) => {
          return <Message message={message} key={index} />;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
