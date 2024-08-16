import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type for actual initial state
export interface InitialStateTypes {
  isSidebarCollapse: boolean;
  isDarkMode: boolean;
}

// represent the state of dark mode and sidebar
const initialState: InitialStateTypes = {
  isSidebarCollapse: false,
  isDarkMode: false,
};

// a fuction that updates the redux store state
// updates whether the sidear is collapsed or not
// ... or whether darkmode is on or not
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapse = action.payload;
    },
    setIsDarkmode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkmode } = globalSlice.actions;

export default globalSlice.reducer;
