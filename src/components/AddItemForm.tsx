import React, {ChangeEvent} from "react";

type AddItemForm = {
    onChange: (value: any) => void
    value: string | number
    placeholder: string
    type: string
}

export const AddItemForm = React.memo((props: AddItemForm) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return <>
        <input value={props.value}
               onChange={onChangeHandler}
               placeholder={props.placeholder}
               type={props.type}
        />
    </>
})