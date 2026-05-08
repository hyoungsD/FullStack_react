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


// store 는 다른 것과 합쳐서 한번에 만들 예정
// export const store = configureStore({
//   reducer: counterSlice.reducer,
// })


// 하나의 store로 만들기 위해
export default counterSlice.reducer;
