import { configureStore } from "@reduxjs/toolkit";
import entireReducer from "./modules/entire";
import homeReducer from "@store/modules/home"
import detailReducer from '@store/modules/detail'
import mainReducer from "@/store/modules/main";

const store = configureStore({
    reducer: { 
        // Add your reducers here
        main:mainReducer,
        entire:entireReducer,
        home:homeReducer,
        detail:detailReducer
     },
})
export default store