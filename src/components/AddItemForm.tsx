import React from "react";

type AddItemForm = {
    onChange: (value: any) => void
    value: string | number
    placeholder: string
    type: string
}

export const AddItemForm = (props: AddItemForm) => {
    return <>
        <input value={props.value}
               onChange={(event) => props.onChange(event.currentTarget.value)}
               placeholder={props.placeholder}
               type={props.type}
        />
    </>

}