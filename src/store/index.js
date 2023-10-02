import {configureStore} from "@reduxjs/toolkit";
import searchedexercises from "./exercisesdata";
 const store=configureStore({
    reducer:{bodyparts:searchedexercises.reducer}

})
export default store