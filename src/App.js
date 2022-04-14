import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="Wrapper">
      <HeaderContainer />
      <SidebarContainer />
      <main>
        <Routes>
          <Route path="/" element={<ProfileContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
