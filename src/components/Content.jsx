import "../index.css";

function Content() {
  return (
    <div className="py-6 px-10">
      <h1 className="text-3xl font-semibold text-white pb-6">Playlists</h1>
      <div className="grid grid-cols-[14rem_14rem_14rem_14rem_14rem] grid-rows-2 gap-14">
        <div className="text-white w-[32rem] h-80 bg-gradient-to-br hover:from-indigo-800 hover:to-indigo-200 cursor-pointer transition from-indigo-900 to-indigo-300 flex flex-col justify-between p-5 rounded-lg">
          <div>
            <h2 className="text-xl pt-16 text-white/60 font-medium">
              <strong>Adekunle Gold </strong>Here For Ya •
              <strong>Julia Wolf </strong>Pillow •
              <br />
              <strong>Claud</strong> If I Were You •{" "}
              <strong>The Wldlfe </strong>
              The Other side • <br />
              <strong>Yoke Lore</strong> Goodpain • <strong>Ayra Starr </strong>
              Memories ... •
            </h2>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Liked Songs</h1>
            <p className="text-xl font-medium">607 liked songs</p>
          </div>
        </div>

        <div className="invisible" />

        <div className="w-56 h-80 bg-neutral-800/50 hover:bg-neutral-100/10 cursor-pointer transition rounded-lg px-4 py-3 gap-4 flex flex-col items-center">
          <img
            className="size-48 rounded"
            src="src/assets/album-happy-hits.svg"
          />
          <div className="text-white space-y-1 w-full">
            <p className="text-xl font-bold">Happy Hits!</p>
            <p className="text-base font-medium text-zinc-400">
              Hits to boost your <br />
              mood and fill you wi...
            </p>
          </div>
        </div>

        <div className="w-56 h-80 bg-neutral-800/50 hover:bg-neutral-100/10 cursor-pointer transition rounded-lg px-4 py-3 gap-4 flex flex-col items-center">
          <img className="size-48 rounded" src="src/assets/album-lofi.svg" />
          <div className="text-white space-y-1 w-full">
            <p className="text-xl font-bold">Anime Lofi & Ch...</p>
            <p className="text-base font-medium text-zinc-400">
              Experience the best Anime moments aga...
            </p>
          </div>
        </div>

        <div className="w-56 h-80 bg-neutral-800/50 hover:bg-neutral-100/10 cursor-pointer transition rounded-lg px-4 py-3 gap-4 flex flex-col items-center">
          <img className="size-48 rounded" src="src/assets/album-afro.svg" />
          <div className="text-white space-y-1 w-full">
            <p className="text-xl font-bold">Afro “Select” Vi...</p>
            <p className="text-base font-medium text-zinc-400">
              A compilation of hit African songs I cons...
            </p>
          </div>
        </div>

        <div className="w-56 h-80 bg-neutral-800/50 hover:bg-neutral-100/10 cursor-pointer transition rounded-lg px-4 py-3 gap-4 flex flex-col items-center">
          <img
            className="size-48 rounded"
            src="src/assets/album-instrumental-study.svg"
          />
          <div className="text-white space-y-1 w-full">
            <p className="text-xl font-bold">Instrumental St...</p>
            <p className="text-base font-medium text-zinc-400">
              A soft musical <br /> backdrop for your st...
            </p>
          </div>
        </div>

        <div className="w-56 h-80 bg-neutral-800/50 hover:bg-neutral-100/10 cursor-pointer transition rounded-lg px-4 py-3 gap-4 flex flex-col items-center">
          <img className="size-48 rounded" src="src/assets/album-pop-mix.svg" />
          <div className="text-white space-y-1 w-full">
            <p className="text-xl font-bold">Pop Mix</p>
            <p className="text-base font-medium text-zinc-400">
              Hey Violet, VÉRITÉ, Timeflies and more
            </p>
          </div>
        </div>

        <div className="w-56 h-80 bg-neutral-800/50 hover:bg-neutral-100/10 cursor-pointer transition rounded-lg px-4 py-3 gap-4 flex flex-col items-center">
          <img className="size-48 rounded" src="src/assets/album-chill.svg" />
          <div className="text-white space-y-1 w-full">
            <p className="text-xl font-bold">Chill Mix</p>
            <p className="text-base font-medium text-zinc-400">
              Julia Wolf, Khalid,
              <br /> ayokay and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
