import React, { Dispatch, SetStateAction } from "react";
import './FormInput.scss';
interface InputProps {
    placeholder: string,
    name: string, 
    value: string, 
    type?: 'text' | 'password' | 'file' ,
    onChange: Dispatch<SetStateAction<string>>
}

export const FormInput = ({type = 'text',name, placeholder, value, onChange}:InputProps) => {

    const handleOnChange = (e:React.FormEvent<HTMLInputElement>)=>{
        onChange(e.currentTarget.value)
    }

    return (
        
            <input  className="form-input"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                />

    )
}