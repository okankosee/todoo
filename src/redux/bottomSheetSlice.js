import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isThreeDotBottomSheetOpen: false
}

export const bottomSheetSlice = createSlice({
    name: 'bottomSheet',
    initialState,
    reducers: {
        SetIsThreeDotBottomSheetOpen: (state) => {
            state.isThreeDotBottomSheetOpen = !state.isThreeDotBottomSheetOpen
        },
    },
})

export const { SetIsThreeDotBottomSheetOpen } = bottomSheetSlice.actions
export default bottomSheetSlice.reducer