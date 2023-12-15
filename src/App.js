import Pin from "./assets/icon/pin";
import westerops from "./assets/westerops.png";
import Bluetick from "./assets/icon/bluetick";
import Horizontal from "./assets/icon/horizontal";
import Tick from "./assets/icon/tick";
import Quote from "./assets/icon/quote";
import Quoteorange from "./assets/icon/quoteorange";
import Rightarrow from "./assets/icon/rightarrow";
import Close from "./assets/icon/close";
import Radiobuton from "./assets/icon/radiobuton";
import Sheet from "react-modal-sheet";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { todos } from "./redux/todosSlice";



function App() {
  const [isOpen, setOpen] = useState(false);
  const OpenBottomSheet = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const todoss = useSelector((state) => state.todos.todos);
  console.log(todoss, 'okan')
  return (
    <>
      <div>
        <button onClick={() => dispatch(todos([23]))} >Ekle</button>
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
              <Tick />
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
            <div className="bg-[#21A7F9] w-[311px] h-[54px] rounded-md flex justify-between ml-4 mb-4 ">
              <div className="flex items-center ml-6 ">
                <Quote />
              </div>
              <div className="text-white font-Inter text-base font-normal leading-normal tracking-tight ml-[-120px] mt-[15px]">
                <button onClick={() => OpenBottomSheet()}>Add a task</button>
              </div>
              <div className="flex items-center mr-4">
                <Rightarrow />
              </div>
            </div>
          </div>
        </div>
      </div >
      <Sheet detent="content-height" isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          {/* <Sheet.Header className="bg-red-600 "/> */}
          <div className="left-0 right-0 flex items-center justify-center h-[56px] border-b border-[#E5E5E5] border-w-[1.5px]">
            <Quoteorange />
            <p className="text-[#FF7964] text-center font-inter text-lg font-semibold leading-normal tracking-tighter ml-2">
              Add a task
            </p>

            <button
              className="absolute top-4 right-4"
              onClick={() => setOpen(false)}

            >
              <Close />
            </button>
          </div>
          <Sheet.Content>
            {
              <>
                <div className="flex justify-center w-[311px] h-[52px] m-8 flex-col  ">
                  <input
                    className=" flex box-border items-start h-12 bg-white rounded p-4 w-full outline-none"
                    type="Task description"
                    style={{ gap: "17px", border: "1.5px solid #999C9F" }}
                    placeholder="Task description"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex mt-[33px] ml-8">
                    <Pin />
                    <p className="text-[#010A1B] font-Inter text-sm font-normal leading-5 px-2 ">
                      Pin on the top
                    </p>
                    <div className=" flex ml-[162px]">
                      <Radiobuton />
                    </div>
                  </div>
                  <div className="flex flex-col mt-[270px]">
                    <div className="flex justify-center">
                      <button className="bg-[#21A7F9] bg-opacity-60 w-[311px] font-normal text-lg leading-5 text-white h-12 rounded">
                        Save
                      </button>
                    </div>
                    <div className="mb-16 mt-8 flex justify-center">
                      <button className="font-Inter text-lg leading-5 text-[#21A7F9]">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

              </>
            }
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

export default App;
