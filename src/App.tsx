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

function App() {
    let workPrice

    let [months, setMonths] = useState<Array<MonthsType>>([
        {id: month1, title: 'Январь'},
        {id: month2, title: 'Февраль'},
    ])
    let [monthId, setMonthId] = useState(month1)
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
        ]
    })

    const onClickAddRepairHandler = (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => {
        workPrice = sumRepair - sparePartsCost
        const newRepairItem = {id: v1(), lastNameClient, typeOfRepair, sumRepair, sparePartsCost, workPrice}
        let monthlyReport = data[monthId]
        data[monthId] = [...monthlyReport, newRepairItem]
        setData({...data})
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
                <option value={month1}>Январь</option>
                <option value={month2}>Февраль</option>
            </select>

            <TableReport data={data} monthId={monthId}
                         onClickAddRepairHandler={onClickAddRepairHandler}
                         onClickRemoveRepairHandler={onClickRemoveRepairHandler}
                         changeTitleCell={changeTitleCell}
            />
        </div>
    );
}

export default App;

