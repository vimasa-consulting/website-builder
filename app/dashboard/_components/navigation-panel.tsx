import Link from 'next/link';


const NavigationPanel = () => {
  return (
    <div className=" flex flex-col">
      <div className=" mb-4 p-3 rounded-md bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700">
        <Link href="" className=" text-white"> <span className='pr-2'>🚀</span> Get Started</Link>
      </div>
      <div className=" mb-4 p-3 rounded-md bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700">
        <Link href=""  className=" text-white"> <span className='pr-2'>📙</span> Projects</Link>
      </div>
      <div className=" mb-4 p-3 rounded-md bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700">
        <Link href=""  className=" text-white"> <span className='pr-2'>🤹</span> Tips & Tricks</Link>
      </div>
      <div className=" mb-4 p-3 rounded-md bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700">
        <Link href=""  className=" text-white"> <span className='pr-2'>🤹</span> Analytics</Link>
      </div>
      <div className=" mb-4 p-3 rounded-md bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700">
        <Link href=""  className=" text-white"> <span className='pr-2'>🌐</span> Domains</Link>
      </div>
      <div className=" mb-4 p-3 rounded-md bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-700">
        <Link href=""  className=" text-white"> <span className='pr-2'> </span>⚙️ Settings</Link>
      </div>
    </div>

  )
}

export default NavigationPanel;