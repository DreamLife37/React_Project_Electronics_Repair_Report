import {EditableCell} from "./EditableCell";
import {AddItemForm} from "./AddItemForm";
import React, {useState} from "react";
import {DataType} from "../App";

type TableReportType = {
    data: DataType
    monthId: string
    onClickAddRepairHandler: (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => void
    onClickRemoveRepairHandler: (id: string, monthId: string) => void
    changeTitleCell: (id: string, newValue: string | number, monthId: string, nameCell: string | number) => void
    monthName: any
}

export const TableReport = (props: TableReportType) => {

    let [lastNameClient, setLastNameClient] = useState('')
    let [typeOfRepair, setTypeOfRepair] = useState('')
    let [sumRepair, setSumRepair] = useState<number>(0)
    let [sparePartsCost, setSparePartsCost] = useState<number>(0)

    let workPrice,
        monthlySum

    const getSumColumn = (monthId: string) => {
        let sum = 0
        props.data[monthId].forEach((el: any) => sum += el.workPrice)
        return sum
    }


    return (<>

        <h2>Отчет по ремонту за {props.monthName}</h2>
        <table>
            <tr>
                <th>№</th>
                <th>Фамилия</th>
                <th>Вид ремонта</th>
                <th>Взяли с клиента</th>
                <th>Стоимость запчасти</th>
                <th>Стоимость работы</th>
            </tr>

            {props.data[props.monthId].map((item, index) => {

                const onTitleChangeHandler = (newValue: string | number, nameCell: string | number) => {
                    props.changeTitleCell(item.id, newValue, props.monthId, nameCell)
                    //index - номер строки = row
                }

                monthlySum = getSumColumn(props.monthId)

                return <>
                    <tr key={item.id}>
                        <td>{index + 1} </td>
                        <EditableCell value={item.lastNameClient}
                                      onChange={(newValue) => onTitleChangeHandler(newValue, 'lastNameClient')}/>
                        <EditableCell value={item.typeOfRepair}
                                      onChange={(newValue) => onTitleChangeHandler(newValue, 'typeOfRepair')}/>
                        <EditableCell value={item.sumRepair}
                                      onChange={(newValue) => onTitleChangeHandler(newValue, 'sumRepair')}/>
                        <EditableCell value={item.sparePartsCost}
                                      onChange={(newValue) => onTitleChangeHandler(newValue, 'sparePartsCost')}/>
                        <td>{workPrice = item.sumRepair - item.sparePartsCost} </td>

                        <button onClick={() => props.onClickRemoveRepairHandler(item.id, props.monthId)}>X</button>
                    </tr>
                </>
            })}
        </table>
        <div>
            <br/>
            <AddItemForm onChange={setLastNameClient} value={lastNameClient}
                         placeholder="Фамилия" type={'text'}/>
            <AddItemForm onChange={setTypeOfRepair} value={typeOfRepair}
                         placeholder="Вид ремонта" type={'text'}/>
            <AddItemForm onChange={setSumRepair} value={sumRepair} placeholder="Стоимость ремонта" type={'number'}/>
            <AddItemForm onChange={setSparePartsCost} value={sparePartsCost} placeholder="Стоимость запчастей"
                         type={'number'}/>
            <button
                onClick={() => props.onClickAddRepairHandler(props.monthId, lastNameClient, typeOfRepair, sumRepair, sparePartsCost)}>+
            </button>
        </div>
        <br/>
        Итого за месяц стоимость работ: {monthlySum}
    </>)
}
