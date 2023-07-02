import { createSlice } from "@reduxjs/toolkit"
export const userDetailSlice = createSlice({
    name: "userDetail",
    initialState: {
        usera: [],
        loading: false,
        error: null
    }
})
export default userDetailSlice.reducer