import "../index.css";

function Header() {
  return (
    <header className="bg-neutral-950 w-full h-20 flex items-center gap-3 justify-between">
      <div className="flex items-center">
        <div className="flex gap-5 px-8">
          <div className="bg-black transition hover:bg-zinc-800 size-10 cursor-pointer rounded-full flex items-center justify-center">
            <img
              className="h-6 pr-1.5"
              src="src/assets/arrow left.svg"
              alt="Arrow Left Icon"
            />
          </div>

          <div className="bg-black transition size-10 hover:bg-zinc-800 cursor-pointer rounded-full flex items-center justify-center">
            <img
              className="h-6 pl-1.5"
              src="src/assets/arrow right.svg"
              alt="Arrow Left Icon"
            />
          </div>
        </div>

        <div className="flex items-center">
          <a className="cursor-pointer transition text-white font-bold py-4 px-6 hover:bg-white/30 rounded-md">
            Playlists
          </a>
          <a className="cursor-pointer transition text-white font-bold py-4 px-6 hover:bg-white/30 rounded-md">
            Podcasts
          </a>
          <a className="cursor-pointer transition text-white font-bold py-4 px-6 hover:bg-white/30 rounded-md">
            Artists
          </a>
          <a className="cursor-pointer transition text-white font-bold py-4 px-6 hover:bg-white/30 rounded-md">
            Albums
          </a>
        </div>
      </div>

      <div className="flex gap-3 items-center px-8">
        <div className="size-7 rounded-full bg-white" />
        <p className="text-white font-bold text-sm cursor-pointer">
          yago_sousa
        </p>
        <img
          className="pt-2 cursor-pointer"
          src="src/assets/options-profile-icon.svg"
          alt="Options Profile Icon"
        />
      </div>
    </header>
  );
}

export default Header;
