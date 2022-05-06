import {v1} from 'uuid';

import {addMonth, monthsReducer} from "./monthsReducer";
import {MonthsType} from "../App";

test('correct month should be added', () => {
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

    const startState: Array<MonthsType> = [
        {id: month1, title: monthTitle[0].title, monthlySum: 2575},
        {id: month2, title: monthTitle[1].title, monthlySum: 3575},
    ]

    const endState = monthsReducer(startState, addMonth("Новый месяц", '2'))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe('Март');
});

