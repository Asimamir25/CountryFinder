import React from "react";
import "./Header.css";
import { useTheme } from "../../themeContext/ThemeContext";
import { FaMoon } from "react-icons/fa6";
const Header = () => {
  const { theme, toggelButton } = useTheme();
  return (
    <div className="header">
      <h3>Where in the World?</h3>
      <div className="headerRight">
        <FaMoon onClick={toggelButton} />
        <h3 onClick={toggelButton}>Dark Mode</h3>
      </div>
    </div>
  );
};

export default Header;
