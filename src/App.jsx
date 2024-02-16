import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Content from "./components/Content";
import Header from "./components/Header";

import "./index.css";

function App() {
  return (
    <div className="overflow-hidden flex bg-gradient-to-t to-neutral-900 from-neutral-950">
      <Navbar />
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <Content />
        <Player />
      </div>
    </div>
  );
}

export default App;
