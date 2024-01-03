import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isThreeDotBottomSheetOpen: false,
    isMainBottomSheetOpen: false
}

export const bottomSheetSlice = createSlice({
    name: 'bottomSheet',
    initialState,
    reducers: {
        SetIsThreeDotBottomSheetOpen: (state) => {
            state.isThreeDotBottomSheetOpen = !state.isThreeDotBottomSheetOpen
        },
        SetIsMainBottomSheetOpen: (state) => {
            state.isMainBottomSheetOpen = !state.isMainBottomSheetOpen
        },
    },
})

export const { SetIsThreeDotBottomSheetOpen, SetIsMainBottomSheetOpen } = bottomSheetSlice.actions
export default bottomSheetSlice.reducer