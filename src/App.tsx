import React from "react";
import "./App.css";
import { SideBar } from "./components/sidebar/Sidebar";
import { Timeline } from "./components/timeline/Timeline";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <SideBar />

      {/* timeline */}
      <Timeline />
      {/* widget */}
    </div>
  );
}

export default App;
