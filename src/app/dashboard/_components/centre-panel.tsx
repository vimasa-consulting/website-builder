import Image from "next/image";
import Link from "next/link";

const CentrePanel = () => {
  return (
    <div className=" flex flex-col gap-y-3 text-white">
      <div className=" ">
        <p className=" italic"> Hi Adharsh, what are we building today?</p>
      </div>
      <div className=" flex flex-row justify-end align-baseline mb-8">
        <Image
          src="/video_embed.png"
          width={652}
          height={385}
          alt="video_embed"
        ></Image>
        <Image
          className="pl-5"
          src="/home_image.png"
          width={228}
          height={315}
          alt="home_image"
        ></Image>
      </div>
      <div className="flex flex-row justify-around max-w-2xl mb-6">
        <div className=" mb-4 pr-16 pl-16 pt-4 pb-4 rounded-md bg-slate-100 hover:bg-slate-300 active:bg-slate-300">
          <Link href="" className=" text-black text-xl">
            Use Smart Builder
          </Link>
        </div>
        <div className=" mb-4 pr-16 pl-16 pt-4 pb-4 rounded-md bg-slate-100 hover:bg-slate-300 active:bg-slate-300">
          <Link href="" className=" text-black text-xl">
            Use Smart Builder
          </Link>
        </div>
      </div>
      <div>
        <div className=" mb-4 text-3xl font-medium">
          <p>Build in 5 min with <span className="text-purple-600">Smart Builder</span></p>
          </div>
        <ul className="mb-4">
          <li className="mb-2">Answer our expert crafted questions</li>
          <li className="mb-2">Get a personalised page built for your goals</li>
          <li className="mb-2">Add powerful copy & images to finish the page</li>
        </ul>
        <p className=" text-1xl	mb-4">
          Voila, your persuasive page is ready to publish! 
        </p>
      </div>
    </div>
  );
};

export default CentrePanel;
