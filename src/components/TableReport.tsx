import React from "react";
import {DataType} from "../App";
import {AddRowToTable} from "./AddRowToTable";
import {TableItem} from "./TableItem";

type TableReportType = {
    data: DataType
    monthId: string
    onClickAddRepairHandler: (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => void
    monthName: any
}

export const TableReport = React.memo((props: TableReportType) => {

    let monthlySum
    const getSumColumn = (monthId: string) => {
        let sum = 0
        props.data[monthId].forEach((el: any) => sum += el.workPrice)
        return sum
    }

    monthlySum = getSumColumn(props.monthId)

    return (<>

        <h2>Отчет по ремонту за {props.monthName}</h2>

        <table>
            <tbody>
            <tr>
                <th>№</th>
                <th>Фамилия</th>
                <th>Вид ремонта</th>
                <th>Взяли с клиента</th>
                <th>Стоимость запчасти</th>
                <th>Стоимость работы</th>
            </tr>
            <TableItem monthId={props.monthId}/>
            </tbody>
        </table>

        <AddRowToTable onClickAddRepairHandler={props.onClickAddRepairHandler} monthId={props.monthId}/>

        <br/>
        Итого за месяц стоимость работ: {monthlySum}
    </>)
})
