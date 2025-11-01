import React from "react";
import InputField from "../Hooks/InputField";

const InputForm = () => {
  const [name, nameOnChange] = InputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submittttttttttted", name);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={name}
          onChange={nameOnChange}
          placeholder="your name"
          name="name"
        />
        <br />
        <input type="email " placeholder="gmail" name="name" />
        <br />
        <input type="password " placeholder="your pass" name="name" />
        <br />
        <input type="submit" valu='submit' className="btn " />
      </form>
    </div>
  );
};

export default InputForm;
