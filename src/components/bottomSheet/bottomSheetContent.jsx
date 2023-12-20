import React, { useState } from 'react'
import Blackpin from '../../assets/icon/blackpin';
import Delete from '../../assets/icon/delete';
import Sync from '../../assets/icon/sync'
import Sheet from 'react-modal-sheet';


function BottomSheetContent () {
const [isOpen, setOpen] = useState(false);
const BottomSheetContent = () => {
  setOpen(true);
};


// const BottomSheetContent = ({ isOpen, setOpen }) => {

    return (
        <Sheet
        detent="content-height"
        isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          
          <Sheet.Content>{
            <>
            <div className='flex justify-center items-center my-6'>
                <div >
                <Blackpin/>
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Pin on the top</p>
                </div>
                <span className="h-[0.5px] w-full bg-[#E5E5E5]"></span>
            </div>
            <div className='flex justify-center items-center my-6'>
                <div>
                <Sync/>
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Update</p>
                </div>
                <span className="h-[0.5px] w-full bg-[#E5E5E5]"></span>
            </div>
            <div className='flex justify-center items-center my-6'>
                <div>
                <Delete />
                <p className='ml-2 h-5 text-#010A1B font-Inter text-16 font-normal leading-normal tracking-tight" style="letter-spacing: -0.24px;'>Delete</p>
                </div>
                <span className="h-[0.5px] w-full bg-[#E5E5E5]"></span>
            </div>
            </>
            };
            
            
            
            </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    );
};


export default BottomSheetContent;
