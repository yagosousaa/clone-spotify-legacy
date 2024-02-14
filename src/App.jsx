import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Player from "./components/Player";

import "./index.css";

function App() {
  return (
    <div className="bg-gradient-to-t to-neutral-900 from-neutral-950 h-screen flex flex-col justify-between">
      <section className="h-full flex">
        <Navbar />
        <Header />
      </section>

      <section className="">
        <Player />
      </section>
    </div>
  );
}

export default App;
