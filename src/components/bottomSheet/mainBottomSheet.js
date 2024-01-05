import React, { useEffect, useState } from 'react'
import Sheet from "react-modal-sheet";
import { useSelector, useDispatch } from 'react-redux';
import { SetIsThreeDotBottomSheetOpen, SetIsMainBottomSheetOpen } from "../../redux/bottomSheetSlice";
import { todosSet, setWillUpdatedId, updateTodo, setTextValue } from "../../redux/todosSlice";
import Close from "../../assets/icon/close";
import Radiobuton from "../../assets/icon/radiobuton";
import Quoteorange from "../../assets/icon/quoteorange";
import Pin from "../../assets/icon/pin";

const MainBottomSheet = () => {
    const [isOpen, setOpen] = useState(false);
    const OpenBottomSheet = () => {
        setOpen(true);

    };
    const textVal = useSelector((state) => state.todos.TextVal);
    const dispatch = useDispatch();

    const [inpValue, setinpValue] = useState({
        id: Math.floor(Math.random() * 100),
        text: textVal,
        checked: false,
    });

    const willUpdatedId = useSelector((state) => state.todos.willUpdatedId);
    const todos = useSelector((state) => state.todos.todos);
    const todosOnThePin = useSelector((state) => state.todos.todosOnThePin);
    const willUpdatedTask = todos.find((item) => item.id === willUpdatedId) || todosOnThePin.find((item) => item.id === willUpdatedId);
    const [updatedText, setUpdatedText] = useState(willUpdatedTask ? willUpdatedTask.text : '');
    console.log(todos, 'asdasd')
    console.log(todosOnThePin, 'ddddasdasd')
    useEffect(() => {
        setUpdatedText(willUpdatedTask ? willUpdatedTask.text : '');
    }, [willUpdatedTask]);
    const isMainBottomSheetOpen = useSelector((state) => state.bottomSheetSlice.isMainBottomSheetOpen);
    const [isCheck, setIsCheck] = useState(false)
    const handleDivClick = () => {
        setIsCheck(prevIsCheck => !prevIsCheck);
    };
    const handleChange = (e) => {
        dispatch(setTextValue(e.target.value));
        setinpValue({
            ...inpValue,
            text: e.target.value,
        });
        if (willUpdatedTask !== undefined) {
            setUpdatedText(e.target.value)
        }
    };
    const handleUpdate = () => {
        dispatch(updateTodo({
            id: willUpdatedId,
            text: updatedText,
        }));

        dispatch(SetIsThreeDotBottomSheetOpen());
    };
    const [partStates, setPartStates] = useState(todos.map(() => false));
    console.log(willUpdatedTask, 'task')
    return (
        <Sheet
            detent="content-height"
            isOpen={isMainBottomSheetOpen}
            onClose={() => dispatch(SetIsMainBottomSheetOpen())}
        >
            <Sheet.Container>
                {/* <Sheet.Header className="bg-red-600 "/> */}
                <div className="left-0 right-0 flex items-center justify-center h-[56px] border-b border-[#E5E5E5] border-w-[1.5px]">
                    <Quoteorange />
                    <p className="text-[#FF7964] text-center font-inter text-lg font-semibold leading-normal tracking-tighter ml-2">
                        Add a task
                    </p>

                    <button
                        className="absolute top-4 right-4"
                        onClick={() => {
                            dispatch(SetIsMainBottomSheetOpen());
                            dispatch(setWillUpdatedId(null))
                        }}
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
                                    value={willUpdatedTask ? updatedText : textVal}
                                    onChange={handleChange}

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
                                        <button
                                            onClick={() => {
                                                if (inpValue.text !== '' && willUpdatedTask === undefined) {
                                                    dispatch(todosSet(inpValue));
                                                    setOpen(false);
                                                    setinpValue({
                                                        ...inpValue,
                                                        id: Math.floor(Math.random() * 100),
                                                    });
                                                    dispatch(setWillUpdatedId(null));
                                                    dispatch(setTextValue(''));
                                                }
                                                if (willUpdatedTask !== undefined) {
                                                    handleUpdate();
                                                    dispatch(SetIsThreeDotBottomSheetOpen());
                                                    dispatch(setWillUpdatedId(null));
                                                }
                                                dispatch(SetIsMainBottomSheetOpen());
                                            }}
                                            className="bg-[#21A7F9] bg-opacity-60 w-[311px] font-normal text-lg leading-5 text-white h-12 rounded"
                                        >
                                            Save
                                        </button>
                                    </div>
                                    <div className="mb-16 mt-8 flex justify-center">
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="font-Inter text-lg leading-5 text-[#21A7F9]"
                                        >
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
    )
}

export default MainBottomSheet