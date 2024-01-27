import React from "react";
import Image from "next/image";

 type frame={
current:number,
previous:number
 };
 type timeFrame={
    daily:frame,
    weekly:frame,
    monthly:frame
 };
export type card={
    title:string,
    timeframes:timeFrame
 };

 export default function Blocks(){

    return(
        <div className=" h-full bg-red-300 w-full ">
            <div className=" h-48  w-48  bg-workbg rounded-xl relative">
                <Image className="absolute right-0 top-[-7px]"
                src="/images/icon-work.svg"
                alt="not found"
                width={58}
                height={58}/>
                <div className="w-48 h-40 bg-Dark-blue rounded-xl absolute bottom-0 hover:bg-Desaturated-blue">
                    <div>
                   <div className=" flex justify-between">
                    <div className="text-[18px]">Work</div>
                    <Image
                    src="images/icon-ellipsis.svg"
                    alt="not found"
                    width={15}
                    height={2}
                    />
                   </div>
                    <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
 };