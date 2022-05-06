import {v1} from "uuid";
import {MonthsType} from "../App";

type ActionType = addMonthType

export type addMonthType = {
    type: 'ADD-MONTH'
    newMonthlyReportId: string
    title: string
}

export const addMonth = (title: string, newMonthlyReportId: string): addMonthType => {
    return {type: 'ADD-MONTH', newMonthlyReportId, title}
}

const monthTitle = [
    {id: '0', title: 'Январь'},
    {id: '1', title: 'Февраль'},
    {id: '2', title: 'Март'},
    {id: '3', title: 'Апрель'},
    {id: '4', title: 'Май'},
    {id: '5', title: 'Июнь'},
    {id: '6', title: 'Июль'},
    {id: '7', title: 'Август'},
    {id: '8', title: 'Сентябрь'},
    {id: '9', title: 'Октябрь'},
    {id: '10', title: 'Ноябрь'},
    {id: '11', title: 'Декабрь'},
]

const initialState: Array<MonthsType> = [
    {id: '0', title: monthTitle[0].title, monthlySum: 2575},
]

export const monthsReducer = (state: Array<MonthsType> = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-MONTH":
            return [...state, {id: action.newMonthlyReportId, title: action.title, monthlySum: 0}]
        default:
            return state;
    }
}