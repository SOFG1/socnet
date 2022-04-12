import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Wrapper">
      <HeaderContainer />
      <SidebarContainer />
      <Routes>
        <Route path="/profile" element={<ProfileContainer />}/>
        <Route path="/" element={<ProfileContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
