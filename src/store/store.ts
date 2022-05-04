import {combineReducers, createStore} from "redux";
import {monthsReducer} from "./monthsReducer";
import {repairReducer} from "./repairReducer";

const rootReducer = combineReducers(
    {
        months: monthsReducer,
        data: repairReducer
    }
)

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store