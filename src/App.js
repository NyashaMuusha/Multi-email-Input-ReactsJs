import "./styles.css";
import React from "react";

import EmailInput from "./EmailInput";

const App = () => {
  const selectedEmails = (emails) => {
    console.log(emails);
  };
  return (
    <div className="App">
      <EmailInput
        selectedEmails={selectedEmails}
        emails={["Nodejs", "MongoDB"]}
      />
    </div>
  );
};

export default App;
