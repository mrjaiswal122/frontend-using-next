"use client";
import Image from "next/image";
import data from "@/assets/data.json";
import Blocks,{card} from "@/components/Block";
import { useState } from "react";

export default function Home() {

const[filterData,setFilterData]=useState<card[]>(data);

const[result,setResult]=useState<number>(1);

function resultDaily(){
setResult(1);
}
function resultWeekly(){
  setResult(2);
}
function resultMonthly(){
  setResult(3);
}

  return (
   <div className=" w-screen h-screen flex flex-row items-center justify-center bg-very-dark-blue">
    <main className="   max-w-[900px]  flex  gap-8 h-[420px]">
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
        <div className="active:text-white hover:text-white" onClick={resultDaily}>Daily</div>
        <div className="active:text-white hover:text-white" onClick={resultWeekly}>Weekly</div>
        <div className="active:text-white hover:text-white" onClick={resultMonthly}>Monthly</div>
        </div>
      </div>
      {/* blocks */}
     <div className=" h-full bg-very-dark-blue w-full grid grid-cols-3 ">
       {filterData.map((d,i)=>(

         
         <Blocks 
         key={i}
         title={d.title}  
         timeframes={d.timeframes}
         result={result}       
         />
       ))
      }
      </div>
    </main>
   </div>
  );
}
