import React, { useState } from 'react'
import Blackpin from '../../assets/icon/blackpin';
import Delete from '../../assets/icon/delete';
import Sync from '../../assets/icon/sync'
import Sheet from 'react-modal-sheet';
import { useSelector, useDispatch } from 'react-redux'
import { SetIsThreeDotBottomSheetOpen } from '../../redux/bottomSheetSlice.js'
import { todosOnThePinSet, todosDelete } from '../../redux/todosSlice'


const BottomSheetContent = () => {
  const dispatch = useDispatch();
  const isThreeDotBottomSheetOpen = useSelector((state) => state.bottomSheetSlice.isThreeDotBottomSheetOpen);
  const willUpdatedId = useSelector((state) => state.todos.willUpdatedId);
  const todos = useSelector((state) => state.todos.todos);
  const willUpdatedTask = todos.find((item) => item.id === willUpdatedId);
  const handlePin = () => {
    dispatch(todosOnThePinSet(willUpdatedTask));
  }

  return (
    <Sheet
      detent="content-height"
      isOpen={isThreeDotBottomSheetOpen} onClose={() => dispatch(SetIsThreeDotBottomSheetOpen())}
    >
      <Sheet.Container>

        <Sheet.Content>{
          <>
            <div className='flex flex-col'>
              <div onClick={handlePin} className='flex justify-center items-center my-6' >
                <Blackpin />
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Pin on the top</p>
              </div>
              <span className="h-[1.5px] w-full bg-[#E5E5E5]"></span>
            </div>
            <div className='flex flex-col' >
              <div className='flex justify-center items-center my-6'>
                <Sync />
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Update</p>
              </div>
              <span className="h-[1.5px] w-full bg-[#E5E5E5]"></span>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center my-6'>
                <Delete />
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Delete</p>
              </div>
              <span className="h-[1.5px] w-full bg-[#E5E5E5]"></span>
            </div>
          </>
        }



        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};


export default BottomSheetContent;
