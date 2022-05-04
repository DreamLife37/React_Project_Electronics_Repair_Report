import React, {ChangeEvent, useReducer, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TableReport} from "./components/TableReport";
import {Chart} from './components/Chart';
import {addMonth, monthsReducer} from "./store/monthsReducer";
import {addRepair, changeCell, removeRepair, repairReducer} from "./store/repairReducer";


type DataOneRepairType = {
    id: string,
    lastNameClient: string,
    typeOfRepair: string,
    sumRepair: number,
    sparePartsCost: number,
    workPrice: number
}

export type DataType = {
    [key: string]: Array<DataOneRepairType>
}

export type MonthsType = {
    id: string, title: string, monthlySum: number
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


function App() {
    let workPrice, monthlySum: number

    // const monthTitle = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

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

    const currentMonth = monthTitle[new Date().getMonth()]

    let [months, dispatchToMonths] = useReducer(monthsReducer, [
        {id: month1, title: monthTitle[0].title, monthlySum: 2575},
        {id: month2, title: monthTitle[1].title, monthlySum: 3575},
        {id: month3, title: monthTitle[2].title, monthlySum: 4575},
        {id: month4, title: monthTitle[3].title, monthlySum: 1575},
        {id: month5, title: monthTitle[4].title, monthlySum: 3575},
    ])

    let [monthId, setMonthId] = useState(currentMonth.id)

    const monthName = months.filter(month => monthId === month.id)[0].title

    let [data, dispatchToData] = useReducer(repairReducer, {
        [month1]: [
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
        ],
        [month2]: [
            {
                id: v1(),
                lastNameClient: 'Andrey',
                typeOfRepair: 'Замена дисплея IPhone 12',
                sumRepair: 4500,
                sparePartsCost: 1500,
                workPrice: 3000
            },
            {
                id: v1(),
                lastNameClient: 'Olga',
                typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
                sumRepair: 2200,
                sparePartsCost: 1200,
                workPrice: 1000
            },
            {
                id: v1(),
                lastNameClient: 'Svetlana',
                typeOfRepair: 'Замена разъема оригинал Xiaomi Mi 11',
                sumRepair: 2000,
                sparePartsCost: 1000,
                workPrice: 1000
            },
        ],
        [month3]: [
            {
                id: v1(),
                lastNameClient: 'Andrey',
                typeOfRepair: 'Замена дисплея IPhone 12',
                sumRepair: 4500,
                sparePartsCost: 1500,
                workPrice: 3000
            },
            {
                id: v1(),
                lastNameClient: 'Olga',
                typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
                sumRepair: 2200,
                sparePartsCost: 1200,
                workPrice: 1000
            },
            {
                id: v1(),
                lastNameClient: 'Svetlana',
                typeOfRepair: 'Замена разъема оригинал Xiaomi Mi 11',
                sumRepair: 2000,
                sparePartsCost: 1000,
                workPrice: 1000
            },
        ],
        [month4]: [
            {
                id: v1(),
                lastNameClient: 'Andrey',
                typeOfRepair: 'Замена дисплея IPhone 12',
                sumRepair: 4500,
                sparePartsCost: 1500,
                workPrice: 3000
            },
            {
                id: v1(),
                lastNameClient: 'Olga',
                typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
                sumRepair: 2200,
                sparePartsCost: 1200,
                workPrice: 1000
            },
            {
                id: v1(),
                lastNameClient: 'Svetlana',
                typeOfRepair: 'Замена разъема оригинал Xiaomi Mi 11',
                sumRepair: 2000,
                sparePartsCost: 1000,
                workPrice: 1000
            },
        ],
        [month5]: [
            {
                id: v1(),
                lastNameClient: 'Andrey',
                typeOfRepair: 'Замена дисплея IPhone 12',
                sumRepair: 4500,
                sparePartsCost: 1500,
                workPrice: 3000
            },
            {
                id: v1(),
                lastNameClient: 'Olga',
                typeOfRepair: 'Замена дисплея Xiaomi Redmi 6A',
                sumRepair: 2200,
                sparePartsCost: 1200,
                workPrice: 1000
            },
            {
                id: v1(),
                lastNameClient: 'Svetlana',
                typeOfRepair: 'Замена разъема оригинал Xiaomi Mi 11',
                sumRepair: 2500,
                sparePartsCost: 2000,
                workPrice: 500
            },
        ],
    })

    const onClickAddRepairHandler = (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => {
        dispatchToData(addRepair(monthId, lastNameClient, typeOfRepair, sumRepair, sparePartsCost))
    }

    const addMonthlyReport = () => { //изменить название на addMonth
        // const newMonthlyReportId = v1()
        // const newMonthlyReport = {id: newMonthlyReportId, title: 'Март', monthlySum: 0}
        // setMonths([...months, newMonthlyReport])
        // setData({
        //     ...data,
        //     [newMonthlyReportId]: []
        // })
        dispatchToMonths(addMonth()) //не работает, исправить
    }

    const onClickRemoveRepairHandler = (id: string, monthId: string) => { //изменить название
        // let monthlyReport = data[monthId]
        // data[monthId] = monthlyReport.filter(item => {
        //     return item.id !== id
        // })
        // setData({...data})
        dispatchToData(removeRepair(id, monthId))
    }

    const changeTitleCell = (id: string, newValue: string | number, monthId: string, nameCell: string | number) => {
        //  @ts-ignore
        dispatchToData(changeCell(id, newValue, monthId, nameCell))
    }


    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonthId(e.currentTarget.value)
    }


    const getSumColumn = (monthId: string) => {
        let sum = 0
        data[monthId].forEach((el: any) => sum += el.workPrice)
        return sum
    }


    const getMonthlySum = () => {
        months.map(month => month.monthlySum = getSumColumn(month.id))
    }

    getMonthlySum()

    return (
        <div className="App">
            <select value={monthId} onChange={onChangeSelect}>
                {months.map(month => {
                    return <option value={month.id}>{month.title}</option>
                })}
            </select>

            <button onClick={addMonthlyReport}>Добавить новый месяц</button>

            <TableReport data={data} monthId={monthId} monthName={monthName}
                         onClickAddRepairHandler={onClickAddRepairHandler}
                         onClickRemoveRepairHandler={onClickRemoveRepairHandler}
                         changeTitleCell={changeTitleCell}

            />

            <div className='chart'><Chart data={months}/></div>
        </div>
    );
}

export default App;

