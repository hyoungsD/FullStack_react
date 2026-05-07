import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',
  initialState: {value: 0},
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    }
  }
});

export const { increase, decrease } = counterSlice.actions;

// 하나의 store로 만들기 위해
export default counterSlice.reducer;
