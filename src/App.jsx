import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [sharedInfo, setSharedInfo] = useState("");

  const handleUpdateInfo = (newInfo) => {
    setSharedInfo(newInfo);
  };

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "App darkmode" : "App"}>
      <Header changeTheme={changeTheme} isDark={isDark} />
      <Search updateInfo={handleUpdateInfo} isDark={isDark} />
      <Info sharedInfo={sharedInfo} isDark={isDark} />
    </div>
  );
}

export default App;
