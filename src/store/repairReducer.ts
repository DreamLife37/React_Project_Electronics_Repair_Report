import {v1} from "uuid";
import {DataType} from "../App";
import {addMonthType} from "./monthsReducer";


type ActionType = addRepairType |
    removeRepairType |
    changeCellType |
    addMonthType

type addRepairType = {
    type: 'ADD-REPAIR',
    monthId: string,
    lastNameClient: string,
    typeOfRepair: string,
    sumRepair: number,
    sparePartsCost: number
}

type  removeRepairType = {
    type: 'REMOVE-REPAIR',
    id: string, monthId: string
}

type changeCellType = {
    type: 'CHANGE-CELL',
    id: string,
    newValue: string | number,
    monthId: string,
    nameCell: string
}

export const addRepair = (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number): addRepairType => {
    return {type: "ADD-REPAIR", lastNameClient, monthId, typeOfRepair, sumRepair, sparePartsCost}
}

export const removeRepair = (id: string, monthId: string): removeRepairType => {
    return {type: 'REMOVE-REPAIR', id, monthId}
}

export const changeCell = (id: string, newValue: string | number, monthId: string, nameCell: string): changeCellType => {
    return {type: 'CHANGE-CELL', id, newValue, monthId, nameCell}
}

const initialState: DataType = {
    ['0']: [
        {
            id: v1(),
            lastNameClient: 'Alexander',
            typeOfRepair: 'Замена дисплея Xiaomi Redmi 11',
            sumRepair: 3000,
            sparePartsCost: 1500,
            workPrice: 1500
        },
        {
            id: v1(),
            lastNameClient: 'Paul',
            typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
            sumRepair: 2200,
            sparePartsCost: 1200,
            workPrice: 1000
        },
        {
            id: v1(),
            lastNameClient: 'Larisa',
            typeOfRepair: 'Замена разъема Xiaomi Redmi 6A',
            sumRepair: 900,
            sparePartsCost: 500,
            workPrice: 400
        },
    ]
}

export const repairReducer = (state: DataType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-REPAIR": {
            const newRepairItem = {
                id: v1(),
                lastNameClient: action.lastNameClient,
                typeOfRepair: action.typeOfRepair,
                sumRepair: action.sumRepair,
                sparePartsCost: action.sparePartsCost,
                workPrice: (action.sumRepair - action.sparePartsCost)
            }
            return {
                ...state,
                [action.monthId]: [...state[action.monthId], newRepairItem]
            }
        }
        case "REMOVE-REPAIR": {
            return {
                ...state,
                [action.monthId]: state[action.monthId]
                    .filter(item => item.id !== action.id)
            }
        }
        case "CHANGE-CELL": {
            let dataOneRepair = state[action.monthId].find(row => row.id === action.id)
            if (dataOneRepair) {
                // @ts-ignore
                dataOneRepair[action.nameCell] = action.newValue
                dataOneRepair.workPrice = dataOneRepair.sumRepair - dataOneRepair.sparePartsCost
            }
            return {
                ...state,
                [action.monthId]: state[action.monthId].map(m =>
                    m.id === action.id ? {...m} : m)
                //m.id === action.id ? {...m, m: [action.nameCell]} : m)
            }
        }

        case "ADD-MONTH":
            return {
                ...state, [action.newMonthlyReportId]: []
            }
        default:
            return state;
    }
}