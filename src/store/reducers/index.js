import { combineReducers } from "redux";
import cmtReducer from "./cmt";

const rootReducer = combineReducers({
    cmt: cmtReducer,
});

export default rootReducer;
