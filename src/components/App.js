import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";

const themes = {
  light: {
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGrey",
    buttonBackground: "Lavender", 
    inputBackground: "Gainsboro"
  },
  dark: {
    backgroundColor: "DarkSlateGrey",
    textColor: "AntiqueWhite",
    buttonBackground: "#232b3c",
    inputBackground: "#45516d"
  }
}

function App(){
  const [theme, setTheme] = useState(themes.light);
  
  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;

  function toggleTheme() {
    setTheme(theme => 
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
    );
  }   

  return (
    <React.Fragment>
      <Header/>
      <ToggleTheme toggleTheme={toggleTheme} theme={theme}/>
      <TicketControl theme={theme}/>
    </React.Fragment>
  );
}

export default App;