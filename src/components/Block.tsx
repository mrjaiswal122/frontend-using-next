import React from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";
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
    title:string;
    timeframes:timeFrame;
    result:number;
    icon:string | StaticImport;
    color:string ;
 };
 
 

 export default function Blocks(props:card){
     const s=props.timeframes;
     var  current:number=0;
     var  previous:number=0;
     {

    if(props.result==1){
        current=props.timeframes.daily.current;
        previous=props.timeframes.daily.previous;
    }
    if(props.result==2){
        current=props.timeframes.weekly.current;
        previous=props.timeframes.weekly.previous;
        
    }
    if(props.result==3){
        current=props.timeframes.monthly.current;
        previous=props.timeframes.monthly.previous;
        
    }
}
    return( 
                <div className=" h-full bg-very-dark-blue w-full overflow-hidden">
                   <div className={clsx(" h-48  w-48  rounded-xl relative",props.color)}>
                <Image className="absolute right-3 top-[-7px]"
                    src={props.icon}
                alt="not found"
                width={58}
                height={58}/>
                <div className="w-48 h-40 bg-Dark-blue rounded-xl absolute bottom-[-1px] hover:bg-Desaturated-blue ">
                   <div className=" flex  flex-col justify-between px-5 h-full py-5 text-white">
                        {/* mininavbar */}
                   <div className=" flex justify-between items-center ">
                    <div className=" text-[18px] font-bold">{props.title}</div>
                    <BsThreeDots className=" hover:font-bold"/>
                   </div>
                   {/* data */}
                   <div className=" flex flex-col  gap-3">
                    <div className="  text-4xl">{current}hrs</div>
                    <div className="  text-xs text-Pale-Blue font-normal">Last Week - {previous}hrs</div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
 };