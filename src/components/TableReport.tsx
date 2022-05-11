import {EditableCell} from "./EditableCell";
import React, {useCallback, useState} from "react";
import {DataType} from "../App";
import {AddRowToTable} from "./AddRowToTable";

type TableReportType = {
    data: DataType
    monthId: string
    onClickAddRepairHandler: (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => void
    onClickRemoveRepairHandler: (id: string, monthId: string) => void
    changeTitleCell: (id: string, newValue: string | number, monthId: string, nameCell: string | number) => void
    monthName: any
}

export const TableReport = React.memo((props: TableReportType) => {

    let workPrice,
        monthlySum

    const getSumColumn = (monthId: string) => {
        let sum = 0
        props.data[monthId].forEach((el: any) => sum += el.workPrice)
        return sum
    }

    const onTitleChangeHandler = useCallback((id: string, newValue: string | number, nameCell: string | number) => {
        props.changeTitleCell(id, newValue, props.monthId, nameCell)
    }, [])

    const changeValueCellLastNameClient = useCallback((id: string, newValue: string) => {
        onTitleChangeHandler(id, newValue, 'lastNameClient')
    }, [])


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

                monthlySum = getSumColumn(props.monthId)

                return <>
                    <tr key={item.id}>
                        <td>{index + 1} </td>
                        <EditableCell value={item.lastNameClient}
                                      onChange={(newValue) => changeValueCellLastNameClient(item.id, newValue)}/>
                        <EditableCell value={item.typeOfRepair}
                                      onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'typeOfRepair')}/>
                        <EditableCell value={item.sumRepair}
                                      onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'sumRepair')}/>
                        <EditableCell value={item.sparePartsCost}
                                      onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'sparePartsCost')}/>
                        <td>{workPrice = item.sumRepair - item.sparePartsCost} </td>

                        <button onClick={() => props.onClickRemoveRepairHandler(item.id, props.monthId)}>X</button>
                    </tr>
                </>
            })}
        </table>

        <AddRowToTable onClickAddRepairHandler={props.onClickAddRepairHandler} monthId={props.monthId}/>

        <br/>
        Итого за месяц стоимость работ: {monthlySum}
    </>)
})
