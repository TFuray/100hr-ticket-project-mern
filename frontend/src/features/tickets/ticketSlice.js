import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  tickets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: state => initialState
  }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer