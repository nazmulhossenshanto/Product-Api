import React from "react";
import UseInputField from "../Hooks/UseInputField";

const HookForm = () => {
    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( 'submiteddddd', name, 'email ::::', email);
  };
  return (
    <div className="ml-10 border-2 border-red-500 p-10">
      <form action="" onSubmit={handleSubmit}>
        <input defaultValue={name} onChange={nameOnChange} type="text" name="name" placeholder="name" required />
        <br /> 
        <input type="email" name="email" placeholder="email" defaultValue={email} onChange={emailOnChange} id="" /> <br />
       <br /> <input type="submit" className="btn" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
