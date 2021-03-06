import {EditableCell} from "./EditableCell";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {DataType} from "../App";
import {changeCell, removeRepair} from "../store/repairReducer";
import {IconButton} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

type TableItemType = {
    monthId: string
}

export const TableItem = React.memo((props: TableItemType) => {

    let data = useSelector<AppRootStateType, DataType>(state => state.data)
    const dispatch = useDispatch()
    let workPrice

    const onTitleChangeHandler = useCallback((id: string, newValue: string | number, nameCell: string | number) => {
        // @ts-ignore
        dispatch(changeCell(id, newValue, props.monthId, nameCell))
    }, [dispatch, props.monthId])

    const onClickRemoveHandler = (id: string, monthId: string) => {
        dispatch(removeRepair(id, monthId))
    }

    return <>
        {data[props.monthId].map((item, index) => {
            return <tr key={item.id}>
                <td>{index + 1} </td>
                <EditableCell value={item.lastNameClient}
                              onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'lastNameClient')}/>
                <EditableCell value={item.typeOfRepair}
                              onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'typeOfRepair')}/>
                <EditableCell value={item.sumRepair}
                              onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'sumRepair')}/>
                <EditableCell value={item.sparePartsCost}
                              onChange={(newValue) => onTitleChangeHandler(item.id, newValue, 'sparePartsCost')}/>
                <td>{workPrice = item.sumRepair - item.sparePartsCost} </td>

                <td>
                    <IconButton onClick={() => onClickRemoveHandler(item.id, props.monthId)} color="primary"
                                aria-label="add an alarm">
                        <DeleteOutlineIcon/>
                    </IconButton>
                </td>
            </tr>

        })}
    </>


})