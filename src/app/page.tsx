"use client";
import Image from "next/image";
import data from "@/assets/data.json";
import Blocks from "@/components/Block";
import type {card} from "@/components/Block";
import { useState } from "react";
import workImg from "@/assets/images/icon-work.svg";
import selfCareImg from "@/assets/images/icon-self care.svg";
import socialImg from "@/assets/images/icon-social.svg";
import studyImg from "@/assets/images/icon-study.svg";
import playImg from "@/assets/images/icon-play.svg";
import exerciseImg from "@/assets/images/icon-exercise.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Home() {



const[result,setResult]=useState<number>(2);

function resultDaily(){
setResult(1);
}
function resultWeekly(){
  setResult(2);
}
function resultMonthly(){
  setResult(3);
}
type sc ={
  color:string;
  icon:StaticImport;
}[];
const stylist:sc=[{
  color:"bg-work",
  icon:workImg
},
{
  color:"bg-play",
  icon:playImg
},{
  color:"bg-study",
  icon:studyImg
},{
  color:"bg-exercise",
  icon:exerciseImg
},{
  color:"bg-social",
  icon:socialImg
},{
  color:"bg-self-care",
  icon:selfCareImg
}

];
  return (
   <div className=" w-full min-h-screen flex flex-row items-center justify-center bg-very-dark-blue">
    <main className="   max-w-[900px]  flex  gap-8 h-[420px]">
      {/* person */}
      <div className=" h-full w-48 bg-Dark-blue relative rounded-xl">
        <div className=" w-full h-[70%] bg-Blue rounded-xl flex justify-between flex-col pt-5 pl-5 pb-16">
           <Image className=" border-solid border-[2px] border-white rounded-full"
           src="/image-jeremy.png"
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
        <div className=" hover:text-white" onClick={resultDaily}>Daily</div>
        <div className="active:text-white hover:text-white" onClick={resultWeekly}>Weekly</div>
        <div className="active:text-white hover:text-white" onClick={resultMonthly}>Monthly</div>
        </div>
      </div>
      {/* blocks */}
     <div className=" h-full bg-very-dark-blue w-full grid grid-cols-3 ">
       {data.map((d,i)=>(

         
         <Blocks 
         key={i}
         title={d.title}  
         timeframes={d.timeframes}
         result={result} 
         icon={stylist[i].icon}  
         color={stylist[i].color}    
         />
       ))
      }
      </div>
    </main>
   </div>
  );
}
