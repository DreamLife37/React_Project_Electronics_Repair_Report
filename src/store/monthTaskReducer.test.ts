import {v1} from "uuid";
import {DataType, MonthsType} from "../App";
import {addMonth, monthsReducer} from "./monthsReducer";
import {repairReducer} from "./repairReducer";

test('correct month should be added', () => {

    const startMonthState: Array<MonthsType> = []
    const startRepairState: DataType = {}

    const action = addMonth("Новый месяц", '2')

    const endMonthState = monthsReducer(startMonthState, action)
    const endRepairState = repairReducer(startRepairState, action)

    expect(endMonthState.length).toBe(1);

});