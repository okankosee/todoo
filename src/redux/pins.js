import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pins: [],
}

export const pinsSlice = createSlice({
    name: 'pins',
    initialState
});