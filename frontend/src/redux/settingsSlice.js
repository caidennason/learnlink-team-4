import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        value: {
            fontSize: 1,
            letterSpacing: 1,
            wordSpacing: 1,
            lineHeight: "normal",
            isOpenDyslexic: false
        }
    },
    reducers: {
        updateSettings(state, action) {
            state.value = action.payload
        }
    }
  });

  export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;