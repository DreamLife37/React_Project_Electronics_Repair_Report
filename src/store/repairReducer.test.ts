import {v1} from 'uuid';
import {addRepair, changeCell, removeRepair, repairReducer} from "./repairReducer";
import {DataType} from "../App";

let month1 = v1(),
    month2 = v1(),
    month3 = v1(),
    month4 = v1(),
    month5 = v1(),
    month6 = v1(),
    month7 = v1(),
    month8 = v1(),
    month9 = v1(),
    month10 = v1(),
    month11 = v1(),
    month12 = v1()

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

const startState: DataType = {
    'month1': [
        {
            id: '1',
            lastNameClient: 'Alexander',
            typeOfRepair: 'Замена дисплея Xiaomi Redmi 11',
            sumRepair: 3000,
            sparePartsCost: 1500,
            workPrice: 1500
        },
        {
            id: '2',
            lastNameClient: 'Paul',
            typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
            sumRepair: 2200,
            sparePartsCost: 1200,
            workPrice: 1000
        },
        {
            id: '3',
            lastNameClient: 'Larisa',
            typeOfRepair: 'Замена разъема Xiaomi Redmi 6A',
            sumRepair: 900,
            sparePartsCost: 500,
            workPrice: 400
        },
    ],
    'month2': [
        {
            id: '1',
            lastNameClient: 'Andrey',
            typeOfRepair: 'Замена дисплея IPhone 12',
            sumRepair: 4500,
            sparePartsCost: 1500,
            workPrice: 3000
        },
        {
            id: '2',
            lastNameClient: 'Olga',
            typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
            sumRepair: 2200,
            sparePartsCost: 1200,
            workPrice: 1000
        },
        {
            id: '3',
            lastNameClient: 'Svetlana',
            typeOfRepair: 'Замена разъема оригинал Xiaomi Mi 11',
            sumRepair: 2000,
            sparePartsCost: 1000,
            workPrice: 1000
        },
    ],
}


test('correct repair should be added', () => {

    const action = addRepair('month2', 'Петров-тест', 'Замена дисплея-тест', 2950, 1640)

    const endState = repairReducer(startState, action)

    expect(endState['month2'].length).toBe(4);

    expect(endState['month2'][3].lastNameClient).toBe('Петров-тест');

});

test('correct repair should be remove', () => {

    const action = removeRepair('3', 'month2')

    const endState = repairReducer(startState, action)

    expect(endState['month2'].length).toBe(2);

});

test('correct change should cell table', () => {

    const action = changeCell('3', 'тест-измененный', 'month2', 'lastNameClient')

    const endState = repairReducer(startState, action)

    expect(endState['month2'][2].lastNameClient).toBe('тест-измененный');

});
