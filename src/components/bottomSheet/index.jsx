import Sheet from 'react-modal-sheet';
import Quoteorange from '../../assets/icon/quoteorange';
import Close from '../../assets/icon/close';




const BottomSheet = ({ children, isOpen, setOpen }) => {
    return (
        <>
            <Sheet detent="content-height" isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    {/* <Sheet.Header /> */}
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
                        {children}
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    );
}

export default BottomSheet;