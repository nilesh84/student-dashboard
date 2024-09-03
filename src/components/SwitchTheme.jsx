import React from "react";

const SwitchTheme = () => {
  const darkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const lightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    darkMode();
  }

  const toggleTheme = (event) => {
    if (event.target.checked) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="theme"
        hidden="hidden"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      ></input>
      <label className="switch" htmlFor="theme"></label>
    </>
  );
};

export default SwitchTheme;
