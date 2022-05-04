
import {v1} from "uuid";
import {MonthsType} from "../App";

type ActionType = addMonthType

type addMonthType = {
    type: 'ADD-MONTH'
}

export const addMonth = (): addMonthType => {
    return {type: 'ADD-MONTH'}
}


let month1 = v1()
let month2 = v1()
let month3 = v1()
let month4 = v1()
let month5 = v1()
let month6 = v1()
let month7 = v1()
let month8 = v1()
let month9 = v1()
let month10 = v1()
let month11 = v1()
let month12 = v1()

const monthTitle = [
    {id: month1, title: 'Январь'},
    {id: month2, title: 'Февраль'},
    {id: month3, title: 'Март'},
    {id: month4, title: 'Апрель'},
    {id: month5, title: 'Май'},
    {id: month6, title: 'Июнь'},
    {id: month7, title: 'Июль'},
    {id: month8, title: 'Август'},
    {id: month9, title: 'Сентябрь'},
    {id: month10, title: 'Октябрь'},
    {id: month11, title: 'Ноябрь'},
    {id: month12, title: 'Декабрь'},
]

const initialState: Array<MonthsType> = [
    {id: month1, title: monthTitle[0].title, monthlySum: 2575},
    {id: month2, title: monthTitle[1].title, monthlySum: 3575},
    {id: month3, title: monthTitle[2].title, monthlySum: 4575},
    {id: month4, title: monthTitle[3].title, monthlySum: 1575},
    {id: month5, title: monthTitle[4].title, monthlySum: 3575},
]

export const monthsReducer = (state: Array<MonthsType> = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MONTH":
            const newMonthlyReportId = v1()
            return [...state, {id: newMonthlyReportId, title: 'Март', monthlySum: 0}]
        default:
            return state;
    }
}