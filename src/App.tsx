import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
import {EditableCell} from "./components/EditableCell";

type DataOneRepair = [id: string,
    name: string,
    typeOfRepair: string,
    sumRepair: number,
    sparePartsCost: number,
    workPrice: number]

type DataType = Array<DataOneRepair>

function App() {

    let [data, setData] = useState<DataType>([
        [v1(), 'Alexander', 'Замена дисплея Xiaomi Redmi 11', 3000, 1500, 1500],
        [v1(), 'Paul', 'Замена дисплея Xiaomi Redmi 6A', 2200, 1200, 1000],
        [v1(), 'Larisa', 'Замена разъема Xiaomi Redmi 6A', 900, 500, 400],
    ])

    let [lastNameClient, setLastNameClient] = useState('')
    let [typeOfRepair, setTypeOfRepair] = useState('')
    let [sumRepair, setSumRepair] = useState<number>(0)
    let [sparePartsCost, setSparePartsCost] = useState<number>(0)


    const SortableBody = () => {
        let workPrice,
            monthlySum

        const getSumColumn = (arr: DataType, column: number) => {
            let sum = 0
            arr.forEach((el: any) => sum += el[column])
            return sum
        }

        const onClickAddRepairHandler = () => {
            workPrice = sumRepair - sparePartsCost
            const newRepairItem = [v1(), lastNameClient, typeOfRepair, +sumRepair, +sparePartsCost, workPrice]
            const newData = [...data, newRepairItem]
            console.log(newData)
            // @ts-ignore
            setData(newData)
        }

        const onClickRemoveRepairHandler = (id: string) => {
            setData(data.filter(item => {
                return item[0] !== id
            }))
        }

        const changeTitleCell = (column: number, row: number, newValue: string | number) => {
            let newData = [...data]
            newData[row][column] = newValue
            newData[row][5] = newData[row][3] - newData[row][4]
            return setData(newData)
        }

        return (<>
            <h2>Отчет по ремонту за Апрель</h2>
            <table>
                <tr>
                    <th>№</th>
                    <th>Фамилия</th>
                    <th>Вид ремонта</th>
                    <th>Взяли с клиента</th>
                    <th>Стоимость запчасти</th>
                    <th>Стоимость работы</th>
                </tr>
                {data.map((item, index) => {
                    const onTitleChangeHandler = (newValue: string | number, column: number) => {
                        changeTitleCell(column, index, newValue)
                        //index - номер строки = row
                    }
                    return <>
                        <tr key={item[0]}>
                            <td>{index + 1} </td>
                            <EditableCell value={data[index][1]}
                                          onChange={(newValue) => onTitleChangeHandler(newValue, 1)}/>
                            <EditableCell value={data[index][2]}
                                          onChange={(newValue) => onTitleChangeHandler(newValue, 2)}/>
                            <EditableCell value={data[index][3]}
                                          onChange={(newValue) => onTitleChangeHandler(+newValue, 3)}/>
                            <EditableCell value={data[index][4]}
                                          onChange={(newValue) => onTitleChangeHandler(+newValue, 4)}/>
                            <td>{workPrice = data[index][3] - data[index][4]} </td>

                            <button onClick={() => onClickRemoveRepairHandler(item[0])}>X</button>
                        </tr>
                    </>
                })}
            </table>

            <div>
                <br/>
                <AddItemForm onChange={setLastNameClient} value={lastNameClient} placeholder="Фамилия" type={'text'}/>
                <AddItemForm onChange={setTypeOfRepair} value={typeOfRepair} placeholder="Вид ремонта" type={'text'}/>
                <AddItemForm onChange={setSumRepair} value={sumRepair} placeholder="Стоимость ремонта" type={'number'}/>
                <AddItemForm onChange={setSparePartsCost} value={sparePartsCost} placeholder="Стоимость запчастей"
                             type={'number'}/>
                <button onClick={onClickAddRepairHandler}>+</button>
            </div>
            <br/>
            Итого за месяц стоимость работ: {getSumColumn(data, 5)}
        </>)
    }

    return (
        <div className="App">
            <SortableBody/>
            {SortableBody()}
        </div>
    );
}


export default App;

