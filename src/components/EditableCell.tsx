import React, {useCallback, useState} from "react";

type EditableCellType = {
    value: any
    onChange: (newValue: string) => void
}
export const EditableCell = React.memo((props: EditableCellType) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value)
    const activateEditMode = useCallback(() => {
        setEditMode(true)
        setTitle(props.value)
    },[props.value])

    const activateViewMode = useCallback(() => {
        setEditMode(false)
        props.onChange(title)
    },[title,props])

    return editMode
        ?
        <td><input value={title} onChange={(e) => setTitle(e.currentTarget.value)} autoFocus onBlur={activateViewMode}/>
        </td>
        : <td onDoubleClick={activateEditMode}>{props.value} </td>
})