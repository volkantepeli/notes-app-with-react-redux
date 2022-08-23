import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./forms/formSlice";

export const store = configureStore({
    reducer : {
        forms: formSlice,
    },
});