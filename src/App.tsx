import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TableReport} from "./components/TableReport";


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

type MonthsType = {
    id: string, title: string
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
    let workPrice

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

    let [months, setMonths] = useState<Array<MonthsType>>([
        {id: month1, title: monthTitle[0].title},
        {id: month2, title: monthTitle[1].title},
        {id: month3, title: monthTitle[2].title},
        {id: month4, title: monthTitle[3].title},
        {id: month5, title: monthTitle[4].title},
    ])

    let [monthId, setMonthId] = useState(currentMonth.id)

    const monthName = months.filter(month => monthId === month.id)[0].title

    let [data, setData] = useState<DataType>({
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
                sumRepair: 2000,
                sparePartsCost: 1000,
                workPrice: 1000
            },
        ],
    })

    const onClickAddRepairHandler = (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => {
        workPrice = sumRepair - sparePartsCost
        const newRepairItem = {id: v1(), lastNameClient, typeOfRepair, sumRepair, sparePartsCost, workPrice}
        let monthlyReport = data[monthId]
        data[monthId] = [...monthlyReport, newRepairItem]
        setData({...data})
    }

    const addMonthlyReport = () => {
        const newMonthlyReportId = v1()
        const newMonthlyReport = {id: newMonthlyReportId, title: 'Март'}
        setMonths([...months, newMonthlyReport])
        setData({
            ...data,
            [newMonthlyReportId]: []
        })
    }

    const onClickRemoveRepairHandler = (id: string, monthId: string) => {
        let monthlyReport = data[monthId]
        data[monthId] = monthlyReport.filter(item => {
            return item.id !== id
        })
        setData({...data})
    }

    const changeTitleCell = (id: string, newValue: string | number, monthId: string, nameCell: string | number) => {
        let monthlyReport = data[monthId]
        let dataOneRepair = monthlyReport.find(row => row.id === id)

        if (dataOneRepair) {
            if (typeof newValue === "string") {
                // @ts-ignore
                dataOneRepair[nameCell] = newValue
                dataOneRepair.workPrice = dataOneRepair.sumRepair - dataOneRepair.sparePartsCost
            }
        }
        return setData({...data})
    }


    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonthId(e.currentTarget.value)
    }


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
        </div>
    );
}

export default App;

