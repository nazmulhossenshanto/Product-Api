import React, { useState } from "react";

const Form = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handlePasswordChange = (e) => {
     setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password should less 6 character");
    } else {
     setError('');
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <form className="space-y-3" action="" onSubmit={onSubmit}>
        <input className="border-2 border-gray-600 p-3" type="text" name="name" placeholder="name" />
        <br />
        <input className="border-2 border-gray-600 p-3"
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
          name="password"
          defaultValue={password}
          required
        />
        <br />
        <p className="text-red-600">{error}</p>
        <input className="btn btn-accent p-3" type="submit" placeholder="Submit" />
      </form>
    </div>
  );
};

export default Form;
