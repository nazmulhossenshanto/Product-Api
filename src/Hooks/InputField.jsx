import { useState } from "react"

const InputField = defaultValue =>{
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const valueOnChange = e =>{
        setFieldValue(e.target.value);
    }
    return [fieldValue, valueOnChange];
}
export default InputField;