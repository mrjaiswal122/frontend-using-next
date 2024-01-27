import Image from "next/image";
import data from "@/assets/data.json";
import Blocks,{card} from "@/components/Block";

export default function Home() {
  return (
  //  <div className=" w-full h-full flex flex-row items-center justify-center bg-very-dark-blue">
    <main className="   max-w-[1440px]  flex  gap-8 h-[420px]">
      {/* person */}
      <div className=" h-full w-48 bg-Dark-blue relative rounded-xl">
        <div className=" w-full h-[70%] bg-Blue rounded-xl flex justify-between flex-col pt-5 pl-5 pb-16">
           <Image className=" border-solid border-[2px] border-white rounded-full"
           src="/images/image-jeremy.png"
           alt="not found"
           width={60}
           height={60}
           />
           {/* name */}
           <div >
           <span className=" text-xs text-Pale-Blue font-normal">Report for</span>
           <h1 className="text-3xl text-white font-normal">Jeremy</h1>
           <h1 className="text-3xl text-white font-normal">Robson</h1>
           </div>
        </div>

        <div className=" flex flex-col pt-5 pl-5 pb-10 text-Pale-Blue gap-1 text-[18px]">
        <div className="active:text-white hover:text-white">Daily</div>
        <div className="active:text-white hover:text-white">Weekly</div>
        <div className="active:text-white hover:text-white">Monthly</div>
        </div>
      </div>



     {/* blocks */}
      <Blocks/>
    </main>
  //  </div>
  );
}
