import './index.css'

function App() {
  return (
   <div className='bg-zinc-900 h-screen'>

    <aside className='bg-black w-64 h-full p-6 text-white space-y-16'>
      <nav className='flex flex-col gap-6 font-regular'>

        <a className='flex gap-4 text-sm text-zinc-200/60 cursor-pointer hover:text-zinc-200 group'>
        <img className='w-5 opacity-60 group-hover:opacity-100' src="src/assets/home-icon.svg" alt="Home icon."/>
        <strong>Home</strong>
        </a>

        <a className='flex gap-4 text-sm text-zinc-200/60 cursor-pointer hover:text-zinc-200 group'>
        <img className='w-5 opacity-60 group-hover:opacity-100' src="src/assets/search-icon.svg" alt="Search icon."/>
        <strong>Search</strong>
        </a>

        <a className='flex gap-4 text-sm text-zinc-200/60 cursor-pointer hover:text-zinc-200 group'>
        <img className='w-5 opacity-60 group-hover:opacity-100' src="src/assets/library-icon.svg" alt="Library icon."/>
        <strong>Your Library</strong>
        </a>
      </nav>

      <nav className='flex flex-col gap-4'>
         <a className='flex gap-4 text-sm text-zinc-200/60 cursor-pointer hover:text-zinc-200 group'>
          <div className='bg-zinc-400 p-[0.5rem] rounded-sm'>
            <img className='w-3 opacity-60 group-hover:opacity-100' src="src/assets/create-icon.svg" alt="Create Playlist icon."/>
          </div>
          <strong className='flex items-center'>Create Playlist</strong>
        </a>

        <a className='flex gap-4 text-sm text-zinc-200/60 cursor-pointer hover:text-zinc-200 group'>
          <div className='bg-gradient-to-br from-indigo-900 to-slate-500 p-[0.5rem] rounded-sm'>
            <img className='w-3 opacity-60 group-hover:opacity-100' src="src/assets/liked-icon.svg" alt="Liked Songs icon."/>
          </div>
          <strong className='flex items-center'>Liked Songs</strong>
        </a>

        <a className='flex gap-4 text-sm text-zinc-200/60 cursor-pointer hover:text-zinc-200 group'>
          <div className='bg-green-900 p-[0.5rem] rounded-sm'>
            <img className='w-3 opacity-60 group-hover:opacity-100' src="src/assets/episodes-icon.svg" alt="Liked Songs icon."/>
          </div>
          <strong className='flex items-center'>Your Episodes</strong>
        </a>
      </nav>

    </aside>

    <footer>

    </footer>


   </div>
  )
}

export default App
