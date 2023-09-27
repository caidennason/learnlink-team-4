import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        value: {}
    },
    reducers: {
        updateSettings(state, action) {
            state.value = action.payload
        }
    }
  });

  export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;