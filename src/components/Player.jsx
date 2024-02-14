import "../index.css";

function Player() {
  return (
    <footer className="bg-neutral-900 w-screen h-28 m-auto text-zinc-400 flex items-center justify-between">
      <div className="flex px-5">
        <div className="flex flex-col">
          <p className="text-zinc-100 text-sm hover:underline cursor-pointer">
            Voice of the Soul
          </p>
          <p className="hover:underline text-sm cursor-pointer">Death</p>
        </div>

        <div className="px-8 flex mb-2">
          <img className="cursor-pointer w-4" src="src/assets/like-icon.svg" />
        </div>
      </div>

      <div className="">
        <div className="flex gap-7 items-center justify-center">
          <img
            className="cursor-pointer w-5"
            src="src/assets/shuffle-icon.svg"
          />
          <img
            className="cursor-pointer w-5"
            src="src/assets/back-music-icon.svg"
          />
          <img
            className="cursor-pointer w-10"
            src="src/assets/pause-music-icon.svg"
          />
          <img
            className="cursor-pointer w-5"
            src="src/assets/next-music-icon.svg"
          />
          <img
            className="cursor-pointer w-5"
            src="src/assets/repeat-music-icon.svg"
          />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-sm cursor-default">2:39</p>
          <div className="w-[552px] bg-zinc-500 h-1 rounded-full cursor-pointer">
            <div className="bg-zinc-100 w-2/6 h-1" />
          </div>
          <p className="text-sm cursor-default">6:32</p>
        </div>
      </div>

      <div className="flex items-center gap-4 pr-5">
        <img className="w-4 cursor-pointer" src="src/assets/queue-icon.svg" />
        <img className="w-4 cursor-pointer" src="src/assets/devices-icon.svg" />
        <img className="w-4 cursor-pointer" src="src/assets/volume-icon.svg" />
        <div className="w-32 bg-zinc-500 h-1 rounded-full cursor-pointer">
          <div className="bg-zinc-100 w-10/12 h-1" />
        </div>
        <img
          className="w-4 cursor-pointer"
          src="src/assets/fullscreen-icon.svg"
        />
      </div>
    </footer>
  );
}

export default Player;
