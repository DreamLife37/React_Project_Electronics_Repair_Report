import React, {useState} from "react";
import {AddItemForm} from "./AddItemForm";
import {IconButton} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';

type addRowToTableType = {
    onClickAddRepairHandler: (monthId: string, lastNameClient: string, typeOfRepair: string, sumRepair: number, sparePartsCost: number) => void
    monthId: string
}

export const AddRowToTable = (props: addRowToTableType) => {
    let [lastNameClient, setLastNameClient] = useState('')
    let [typeOfRepair, setTypeOfRepair] = useState('')
    let [sumRepair, setSumRepair] = useState<number>(0)
    let [sparePartsCost, setSparePartsCost] = useState<number>(0)

    const addRepair = () => {
        props.onClickAddRepairHandler(props.monthId, lastNameClient, typeOfRepair, sumRepair, sparePartsCost)
    }

    return <div>
        <br/>
        <AddItemForm onChange={setLastNameClient} value={lastNameClient}
                     placeholder="Фамилия" type={'text'}/>
        <AddItemForm onChange={setTypeOfRepair} value={typeOfRepair}
                     placeholder="Вид ремонта" type={'text'}/>
        <AddItemForm onChange={setSumRepair} value={sumRepair} placeholder="Стоимость ремонта" type={'number'}/>
        <AddItemForm onChange={setSparePartsCost} value={sparePartsCost} placeholder="Стоимость запчастей"
                     type={'number'}/>

        <IconButton onClick={addRepair} color="primary" aria-label="add an repair">
            <AddBoxIcon/>
        </IconButton>
    </div>
}