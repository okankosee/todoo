import Pin from "../../assets/icon/pin";
import westerops from "../../assets/westerops.png";
import Bluetick from "../../assets/icon/bluetick";
import Horizontal from "../../assets/icon/horizontal";
import Tick from "../../assets/icon/tick";
import Quote from "../../assets/icon/quote";
import Rightarrow from "../../assets/icon/rightarrow";
import { useState } from "react";
import BottomSheetContent from "../../components/bottomSheet/bottomSheetContent";

const Home = () => {
    const [isOpen, setOpen] = useState(false);

    const [isTick, setIsTick] = useState(false);
    return (
        <div className="overflow-hidden h-screen m-0 p-0 flex flex-col items-center bg-gradient-to-r from-[#85A1BA] to-[#194591]">
            <img
                className="mt-[53px] h-[22px] w-[164px] text-black"
                src={westerops}
                alt="logo"
            />

            <div className="w-[343px] h-[650px] rounded-lg bg-white mb-[62px] mt-[78px]">
                <div className="w-full h-[54px] flex flex-col items-center justify-center  ">
                    <p className="text-[#194591] text-center font-Inter font-semibold text-lg tracking-wide leading-normal mt-4">
                        To Do List
                    </p>
                    <span className="h-1 w-[159px] bg-[#FF7964] "></span>
                    <span className="h-[0.5px] w-full bg-[#E5E5E5]"></span>
                </div>
                <div className="w-full h-[126px] border-b border-[#E5E5E5] flex flex-col">
                    <div className="flex mt-[25px] ml-4">
                        <Pin />
                        <p className="text-[#FF7964] font-Inter text-sm font-normal leading-5 px-2 ">
                            Pin on the top
                        </p>
                    </div>
                    <div className="w-[311px] flex justify-between ml-4 mt-[25px]">
                        <Bluetick />
                        <p className="text-[#010A1B] font-inter text-base font-normal leading-5 px-4  ml-[-40px]">
                            Getting an invite for Figma
                        </p>
                        <div className="justify-end">
                            <Horizontal />
                        </div>
                    </div>
                </div>
                <div className="w-[311px] flex justify-between ml-4 mt-[25px]">
                    <div onClick={() => setIsTick(!isTick)}>
                        {isTick ? <Bluetick /> : <Tick />}
                    </div>
                    <p className="text-[#010A1B] font-inter text-base font-normal leading-5  mr-10 ml-[-90px]">
                        8 am meeting
                    </p>
                    <Horizontal />
                </div>
                <div className="w-[311px] flex justify-between ml-4 mt-[25px]">
                    <Bluetick />
                    <p className="text-[#010A1B] font-inter text-base font-normal leading-5 ml-[-90px]">
                        Finish visual Design
                    </p>
                    <Horizontal />
                </div>
                <div className="w-[311px] flex justify-between ml-4 mt-[25px]">
                    <Tick />
                    <p className="text-[#010A1B] font-inter text-base font-normal leading-5 px-4 mr-10 ml-[-100px]">
                        Do research
                    </p>
                    <Horizontal />
                </div>
                <div className="w-[311px] flex justify-between ml-4 mt-[25px]">
                    <Tick />
                    <p className="text-[#010A1B] font-inter text-base font-normal leading-5 px-4  ml-[-40px]">
                        Reading About WesterOps
                    </p>
                    <Horizontal />
                </div>
                <div className="w-[311px] flex justify-between ml-4 mt-[25px]">
                    <Tick />
                    <p className="text-[#010A1B] font-inter text-base font-normal leading-5  ml-[-170px]">
                        Do yoga
                    </p>
                    <Horizontal />
                </div>
                <div className="h-[100px]"></div>
                <div onClick={() => setOpen(true)} className="bg-[#21A7F9] w-[311px] h-[54px] rounded-md flex justify-between ml-4 mb-4 ">
                    <div className="flex items-center ml-6 ">
                        <Quote />
                    </div>
                    <div className="text-white font-Inter text-base font-normal leading-normal tracking-tight ml-[-120px] mt-[15px]">
                        <button >Add a task</button>
                    </div>
                    <div className="flex items-center mr-4">
                        <Rightarrow />
                    </div>
                </div>
            </div>
            <BottomSheetContent isOpen={isOpen} setOpen={setOpen} />
        </div>
    )
}

export default Home
