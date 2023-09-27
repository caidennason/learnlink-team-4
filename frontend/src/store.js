import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import settingsReducer from "./redux/settingsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        settings: settingsReducer
    }
})

export default store;