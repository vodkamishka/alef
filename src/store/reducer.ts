import { createSlice } from '@reduxjs/toolkit';

export interface IInfo {
  name: string;
  age: string;
  id: string;
}

export interface IPersonal {
  name: string;
  age: string;
}

export interface IData {
  info: IPersonal;
  children: IInfo[];
}

const initialState: IData = {
  info: {
    name: '',
    age: '',
  },
  children: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    saveInfoPreview(state: IData, action) {
      state.children = action.payload;
    },
    saveParentInfo(state: IData, action) {
      state.info = action.payload;
    },
  },
});

export const { saveInfoPreview, saveParentInfo } = dataSlice.actions;

export default dataSlice.reducer;
