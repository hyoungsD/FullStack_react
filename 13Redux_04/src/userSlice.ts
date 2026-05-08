import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserState = {name: string};

// 초기값
const initialState: UserState = {name: '손흥민'};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});

export const { changeName } = userSlice.actions;

// 하나의 store로 만들기 위해
export default userSlice.reducer;

