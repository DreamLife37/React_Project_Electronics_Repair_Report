import React, {ChangeEvent, useCallback, useReducer, useState} from 'react';
import './App.css';
import {TableReport} from "./components/TableReport";
import {Chart} from './components/Chart';
import {addMonth} from "./store/monthsReducer";
import {addRepair, changeCell, removeRepair} from "./store/repairReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";


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

function AppWithRedux() {
    let workPrice, monthlySum: number
    console.log("App is called")

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

    //const currentMonth = monthTitle[new Date().getMonth()]
    const currentMonth = monthTitle[0]

    let months = useSelector<AppRootStateType, Array<MonthsType>>(state => state.months)
    let data = useSelector<AppRootStateType, DataType>(state => state.data)
    const dispatch = useDispatch()

    console.log(months)

    let [monthId, setMonthId] = useState(currentMonth.id)

    const monthName = months.filter(month => monthId === month.id)[0].title

    //console.log(months.filter(month => monthId === month.id)[0].title)
    //console.log(months.filter(month => monthId === month.id))

    const generateMonthId = +months[months.length - 1].id + 1
    const newMonthTitle = monthTitle[generateMonthId].title
    console.log(newMonthTitle)
    // console.log(monthTitle[generateMonthId].title)

    const onClickAddRepairHandler = useCallback((monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => {
        dispatch(addRepair(monthId, lastNameClient, typeOfRepair, sumRepair, sparePartsCost))
    }, [])

    const addMonthlyReport = useCallback(() => {
        dispatch(addMonth(newMonthTitle, (generateMonthId).toString()))
    }, [addMonth, generateMonthId])

    const onClickRemoveRepairHandler = (id: string, monthId: string) => { //изменить название
        dispatch(removeRepair(id, monthId))
    }

    const changeTitleCell = useCallback((id: string, newValue: string | number, monthId: string, nameCell: string | number) => {
        // @ts-ignore
        dispatch(changeCell(id, newValue, monthId, nameCell))
    }, [])

    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setMonthId(e.currentTarget.value)
    }

    const getSumColumn = (monthId: string) => {
        let sum = 0
        data[monthId].forEach((el: any) => sum += el.workPrice)
        return sum
    }

    const getMonthlySum = () => {
        // @ts-ignore
        months.map(month => month.monthlySum = getSumColumn(month.id))
    }

    getMonthlySum()

    return (
        <div className="App">
            <select value={monthId} onChange={onChangeSelect}>
                {months.map(month => {
                    return <option key={month.id} value={month.id}>{month.title}</option>
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

export default AppWithRedux;

