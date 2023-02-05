import React, { TimeHTMLAttributes, useCallback, useEffect } from "react";
import styles from './index.module.scss'
import { useToDoStore } from "../../../data/stores/useToDoStore";
import { useState } from "react";

interface InputPlusProps {
    onAdd: (title: string) => void
}

export const InputPlus: React.FC<InputPlusProps> = ({
    onAdd
}) => {
const [inputValue, setInputValue] = useState('');
const AddTask = useCallback(()=> {
    onAdd(inputValue);
    setInputValue('');
}, [inputValue])
    return (
        <div className={styles.inputPlus}>
            <input
            type = "text"
            className={styles.inputPlusValue}
            value = {inputValue}
            onChange = {(evt) => {
                setInputValue(evt.target.value);
            }}
            onKeyDown={(evt)=>{
                if(evt.key === "Enter") {
                    AddTask()
                }
            }}
            placeholder = "Type here!"
            ></input>
            <button
                onClick={AddTask}
                aria-label="Add"
                className={styles.inputPlusButton}
            ></button>
        </div>
    )

}
