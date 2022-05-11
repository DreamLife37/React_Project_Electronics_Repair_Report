import React, {useState} from "react";

type EditableCellType = {
    value: any
    onChange: (newValue: string) => void
}
export const EditableCell = React.memo((props: EditableCellType) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value)
    console.log('EditableCell')
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.value)
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }


    return editMode
        ? <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} autoFocus onBlur={activateViewMode}/>
        : <td onDoubleClick={activateEditMode}>{props.value} </td>
})