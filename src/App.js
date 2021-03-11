import React from "react";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  if(!localStorage.getItem("username")) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="bf907bc0-a2e2-4d92-ad45-03e2915dcd68"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}/>
  );
}

export default App;
