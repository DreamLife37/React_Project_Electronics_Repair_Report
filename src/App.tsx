import React, {ChangeEvent, useCallback, useState} from 'react';
import './App.css';
import {TableReport} from "./components/TableReport";
import {Chart} from './components/Chart';
import {addMonth} from "./store/monthsReducer";
import {addRepair} from "./store/repairReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InputLabel from '@mui/material/InputLabel';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Button} from "@mui/material";


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

function App() {
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

    const generateMonthId = +months[months.length - 1].id + 1
    const newMonthTitle = monthTitle[generateMonthId].title
    // console.log(monthTitle[generateMonthId].title)

    const onClickAddRepairHandler = useCallback((monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => {
        dispatch(addRepair(monthId, lastNameClient, typeOfRepair, sumRepair, sparePartsCost))
    }, [dispatch])

    const addMonthlyReport = useCallback(() => {
        dispatch(addMonth(newMonthTitle, (generateMonthId).toString()))
    }, [addMonth, generateMonthId])

    const onChangeSelect = (e: SelectChangeEvent) => {
        setMonthId(e.target.value)
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

            <Box sx={{display: 'flex'}}>
                <FormControl>
                    <InputLabel id="select-month">Месяц</InputLabel>
                    <Select
                        value={monthId}
                        label="Месяц"
                        onChange={onChangeSelect}
                    >
                        {months.map(month => {
                            return <MenuItem key={month.id} value={month.id}>{month.title}</MenuItem>
                        })
                        }
                    </Select>
                </FormControl>

                <Button onClick={addMonthlyReport} variant="contained" endIcon={<AddBoxIcon/>}>
                    Добавить новый месяц
                </Button>
            </Box>

            <TableReport data={data} monthId={monthId} monthName={monthName}
                         onClickAddRepairHandler={onClickAddRepairHandler}
            />

            <div className='chart'><Chart data={months}/></div>
        </div>
    );
}

export default App;

