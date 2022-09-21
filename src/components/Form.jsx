import React from 'react'

export default function Form({ value, setValue, handleSubmit }) {

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e);
  };


  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={handleChange}>
      </input>
      <button type="submit">입력</button>
    </form>
  )
}
