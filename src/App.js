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
import { useSelector, useDispatch } from "react-redux";
import { todosSet, setWillUpdatedId, updateTodo } from "./redux/todosSlice";
import BottomSheetContent from "./components/bottomSheet/bottomSheetContent";
import { SetIsThreeDotBottomSheetOpen, SetIsMainBottomSheetOpen } from "./redux/bottomSheetSlice";
import { useEffect } from "react";
import MainBottomSheet from "./components/bottomSheet/mainBottomSheet";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const OpenBottomSheet = () => {
    setOpen(true);

  };
  const willUpdatedId = useSelector((state) => state.todos.willUpdatedId);
  const todos = useSelector((state) => state.todos.todos);
  const todosOnThePin = useSelector((state) => state.todos.todosOnThePin);
  const willUpdatedTask = todos.find((item) => item.id === willUpdatedId);
  const [updatedText, setUpdatedText] = useState(willUpdatedTask ? willUpdatedTask.text : '');
  useEffect(() => {
    setUpdatedText(willUpdatedTask ? willUpdatedTask.text : '');
  }, [willUpdatedTask, willUpdatedId]);
  const [partStates, setPartStates] = useState(todos.map(() => false));
  const toggleCheckbox = (index) => {
    const newPartStates = [...partStates];
    newPartStates[index] = !newPartStates[index];
    setPartStates(newPartStates);
  };
  const [partStatesPinned, setPartStatesPinned] = useState(todosOnThePin.map(() => false));
  const toggleCheckboxPinned = (index) => {
    const newPartStatesPinned = [...partStatesPinned];
    newPartStatesPinned[index] = !newPartStatesPinned[index];
    setPartStatesPinned(newPartStatesPinned);
  };
  return (
    <>
      <div>
        <div className="overflow-hidden h-screen m-0 p-0 flex flex-col items-center bg-gradient-to-r from-[#85A1BA] to-[#194591]">
          <img
            className="mt-[53px] h-[22px] w-[164px] text-black"
            src={westerops}
            alt="logo"
          />

          <div className="bg-white w-[343px] h-[650px] mt-10 rounded-lg  flex flex-col justify-between">
            <div>
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
                <div className="w-full flex flex-col overflow-auto py-4 h-full">
                  {todosOnThePin?.map((item, index) => <div
                    key={item?.id}
                    className="flex justify-between px-4 mb-[30px] mt-4"
                  >
                    <div onClick={() => toggleCheckboxPinned(index)}>
                      {partStatesPinned[index] ? <Bluetick /> : <Tick />}
                    </div>
                    <div className="flex w-full justify-start">
                      <p className="text-[#010A1B] text-left font-inter text-base font-normal leading-5 px-4 ">
                        {item.text.slice(0, 20)}
                      </p>
                    </div>
                    <button

                      onClick={() => {
                        dispatch(SetIsThreeDotBottomSheetOpen())
                        dispatch(setWillUpdatedId(item?.id))
                        console.log(item.id)
                      }}
                    >
                      <Horizontal />
                    </button>
                  </div>)}
                </div>
              </div>
              <div className=" overflow-auto h-96">
                {todos?.map((item, index) => (
                  <div
                    key={item?.id}
                    className="flex justify-between px-4 mb-[30px] mt-4"
                  >
                    <div onClick={() => toggleCheckbox(index)}>
                      {partStates[index] ? <Bluetick /> : <Tick />}
                    </div>
                    <div className="flex w-full">
                      <p className="text-[#010A1B] text-left font-inter text-base font-normal leading-5 px-4 ">
                        {item?.text.slice(0, 20)}
                      </p>
                    </div>
                    <button

                      onClick={() => {
                        dispatch(setWillUpdatedId(item?.id))
                        dispatch(SetIsThreeDotBottomSheetOpen())
                      }}
                    >
                      <Horizontal />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div
              onClick={() => dispatch(SetIsMainBottomSheetOpen())}
              className="bg-[#21A7F9] w-[311px] h-[54px] rounded-md flex justify-between ml-4 mb-4"
            >
              <div className="flex items-center ml-6 ">
                <Quote />
              </div>
              <div className="text-white font-Inter text-base font-normal leading-normal tracking-tight ml-[-120px] mt-[15px]">
                Add a task
              </div>
              <div className="flex items-center mr-4">
                <Rightarrow />
              </div>
            </div>
          </div>
        </div>
        <BottomSheetContent />
        <MainBottomSheet />
      </div>
    </>
  );
}

export default App;
