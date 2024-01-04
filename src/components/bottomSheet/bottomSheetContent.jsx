import React, { useState, useEffect } from 'react'
import Blackpin from '../../assets/icon/blackpin';
import Delete from '../../assets/icon/delete';
import Sync from '../../assets/icon/sync'
import Sheet from 'react-modal-sheet';
import { useSelector, useDispatch } from 'react-redux'
import { SetIsMainBottomSheetOpen, SetIsThreeDotBottomSheetOpen } from '../../redux/bottomSheetSlice.js'
import { todosOnThePinSet, todosDelete, updateTodo, todosOnThePinDelete, setWillUpdatedId } from '../../redux/todosSlice'



const BottomSheetContent = () => {
  const dispatch = useDispatch();
  const isThreeDotBottomSheetOpen = useSelector((state) => state.bottomSheetSlice.isThreeDotBottomSheetOpen);
  const willUpdatedId = useSelector((state) => state.todos.willUpdatedId);
  const todos = useSelector((state) => state.todos.todos);
  const willUpdatedTask = todos.find((item) => item.id === willUpdatedId);
  const [updatedText, setUpdatedText] = useState(willUpdatedTask ? willUpdatedTask.text : '');
  useEffect(() => {
    setUpdatedText(willUpdatedTask ? willUpdatedTask.text : '');
  }, [willUpdatedTask]);

  const handlePin = () => {
    dispatch(todosOnThePinSet(willUpdatedTask));
    dispatch(todosDelete(willUpdatedId));
  }


  const handleDelete = () => {
    dispatch(todosDelete(willUpdatedId));
    dispatch(todosOnThePinDelete(willUpdatedId));
  }


  const handleUpdate = () => {
    dispatch(updateTodo({
      id: willUpdatedId,
      text: updatedText,
    }));

    dispatch(SetIsThreeDotBottomSheetOpen());
  };

  return (
    <Sheet
      detent="content-height"
      isOpen={isThreeDotBottomSheetOpen} onClose={() => {
        dispatch(setWillUpdatedId(null))
        dispatch(SetIsThreeDotBottomSheetOpen())
      }}
    >
      <Sheet.Container>

        <Sheet.Content>{
          <>
            <div className='flex flex-col'>
              <div onClick={handlePin} className='flex justify-center items-center my-6 ' >
                <Blackpin />
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Pin on the top</p>
              </div>
              <span className="h-[1.5px] w-full bg-[#E5E5E5]"></span>
            </div>
            <div className='flex flex-col' >
              <div onClick={() => {
                dispatch(SetIsMainBottomSheetOpen())
                handleUpdate(willUpdatedId)
              }} className='flex justify-center items-center my-6'>

                <Sync />
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Update</p>
              </div>
              <span className="h-[1.5px] w-full bg-[#E5E5E5]"></span>
              <div className='flex justify-center items-center my-6'>
                <input
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                />
                <button onClick={handleUpdate}>güncelle</button>
              </div>
            </div>
            <div className='flex flex-col'>
              <div onClick={handleDelete} className='flex justify-center items-center my-6'>
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
