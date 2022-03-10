import "./App.css";
import { SideBar } from "./components/sidebar/Sidebar";
import { Timeline } from "./components/timeline/Timeline";
import { Widgets } from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <SideBar />

      {/* timeline */}
      <Timeline />
      {/* widget */}
      <Widgets />
    </div>
  );
}

export default App;
