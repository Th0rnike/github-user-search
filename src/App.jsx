import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <Header changeTheme={changeTheme} isDark={isDark} />
      <Search isDark={isDark} />
      <Info isDark={isDark} />
    </div>
  );
}

export default App;
