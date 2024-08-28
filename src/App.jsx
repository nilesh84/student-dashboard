import React from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <StudentList />
      </div>
    </div>
  );
};

export default App;
