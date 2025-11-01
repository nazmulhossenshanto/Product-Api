import { useState } from "react"

const UseInputField2 = defaultValue =>{
    const [fieldValue2, setFieldValue2] = useState(defaultValue);
    const handleFieldOnChange2 = e=>{
        setFieldValue2(e.target.value)
    }
    return [fieldValue2, handleFieldOnChange2]
}
export default UseInputField2;