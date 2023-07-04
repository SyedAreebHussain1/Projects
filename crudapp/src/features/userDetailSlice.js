import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// create action 
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    // name=${data.name}&email=${data.email}&age=${data.age}  
    const response = await fetch(`https://64a1de510079ce56e2db730e.mockapi.io/crud`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
    const response = await fetch(`https://64a1de510079ce56e2db730e.mockapi.io/crud`)
    try {
        const result = await response.json()
        // console.log('result', result)
        return result
    } catch (error) {
        // console.log('error', error)
        return rejectWithValue(error)
    }
})
export const userDelete = createAsyncThunk("userDelete", async (id, { rejectWithValue }) => {
    console.log(id)
    const response = await fetch(`https://64a1de510079ce56e2db730e.mockapi.io/crud/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    try {
        const result = await response.json()
        console.log('result', result)
        return result
    } catch (error) {
        console.log('error', error)
        return rejectWithValue(error)
    }
})
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload)
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [showUser.pending]: (state) => {
            state.loading = true
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [userDelete.pending]: (state) => {
            state.loading = true
        },
        [userDelete.fulfilled]: (state, action) => {
            const { id } = action.payload
            state.loading = false;
            if (id) {
                state.users = state.users.filter((ele) => ele?.id !== id)
            }
        },
        [userDelete.rejected]: (state, action) => {
            state.loading = false;
            // state.error = action.payload;
        },
    }

})
export default userDetail.reducer