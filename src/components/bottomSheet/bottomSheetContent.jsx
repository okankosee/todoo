import React, { useState } from 'react'
import Radiobuton from '../../assets/icon/radiobuton';
import Pin from '../../assets/icon/pin';
import { useSelector, useDispatch } from 'react-redux'
import BottomSheet from '.'
import { todos } from '../../redux/todosSlice';


const input = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = () => {
        dispatch(todos({
            item: input,
            done: false,
            id: Date.now()
        }))
    }
}



const BottomSheetContent = ({ isOpen, setOpen }) => {

    return (
        <BottomSheet isOpen={isOpen} setOpen={setOpen}>
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
        </BottomSheet>
    )
}

export default BottomSheetContent
