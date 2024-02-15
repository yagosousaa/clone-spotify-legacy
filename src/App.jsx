import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Content from "./components/Content";

import "./index.css";

function App() {
  return (
    <div className="bg-gradient-to-t to-neutral-900 from-neutral-950 h-screen flex flex-col justify-between">
      <section className="flex h-full">
        <Navbar />
        <div className="w-full flex flex-col">
          <Header />
          <Content />
        </div>
      </section>
      <div>
        <Player />
      </div>
    </div>
  );
}

export default App;
