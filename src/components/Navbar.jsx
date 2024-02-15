import "../index.css";

function Navbar() {
  return (
    <aside className="bg-black h-full w-80 overflow-hidden flex flex-col items-center">
      <section className="mr-10">
        <nav className="flex flex-col gap-6 font-regular mb-12 mt-16">
          <a className="flex gap-5 text-normal items-center text-zinc-200 cursor-pointer group">
            <img
              className="w-6"
              src="src/assets/home-icon.svg"
              alt="Home icon."
            />
            <strong>Home</strong>
          </a>

          <a className="flex gap-6 text-normal items-center font-normal cursor-pointer group">
            <img
              className="w-6 opacity-60 group-hover:opacity-100 transition"
              src="src/assets/search-icon.svg"
              alt="Search icon."
            />
            <strong className="text-zinc-200/60 transition cursor-pointer hover:text-white">
              Search
            </strong>
          </a>

          <a className="flex gap-6 text-normal items-center font-normal cursor-pointer group">
            <img
              className="w-6 opacity-60 transition group-hover:opacity-100"
              src="src/assets/library-icon.svg"
              alt="Library icon."
            />
            <strong className="text-zinc-200/60 cursor-pointer transition hover:text-white">
              Your Library
            </strong>
          </a>
        </nav>

        <nav className="flex flex-col gap-4">
          <a className="flex gap-5 text-normal items-center font-normal group">
            <div className="bg-zinc-400 p-[0.5rem] rounded-[3px]">
              <img
                className="w-4 opacity-100"
                src="src/assets/create-icon.svg"
                alt="Create Playlist icon."
              />
            </div>
            <strong className="flex items-center text-zinc-200/60 cursor-pointer transition hover:text-white">
              Create Playlist
            </strong>
          </a>

          <a className="flex gap-5 text-normal items-center font-normalgroup">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-200 p-[0.5rem] rounded-[3px]">
              <img
                className="w-4 opacity-100"
                src="src/assets/liked-icon.svg"
                alt="Liked Songs icon."
              />
            </div>
            <strong className="flex items-center text-zinc-200/60 cursor-pointer transition hover:text-white">
              Liked Songs
            </strong>
          </a>
        </nav>
      </section>
      <div className="border-t-[1px] opacity-15 my-4 w-10/12" />

      <div className="mr-10 flex flex-col space-y-4 text-normal text-zinc-400">
        <a className="cursor-pointer transition hover:text-white">Jazz</a>
        <a className="cursor-pointer transition hover:text-white">Metal</a>
        <a className="cursor-pointer transition hover:text-white">Indie</a>
        <a className="cursor-pointer transition hover:text-white">Rock</a>
        <a className="cursor-pointer transition hover:text-white">
          Your Top Songs 2023
        </a>
        <a className="cursor-pointer transition hover:text-white">Orchestra</a>
      </div>
    </aside>
  );
}

export default Navbar;
