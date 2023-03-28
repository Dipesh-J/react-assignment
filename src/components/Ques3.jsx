import React, { useState } from "react";

const Ques3 = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: "" });
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter some text"
            value={inputField.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <div>
        <button className="btn" type="button" onClick={handleAddFields}>
          Add more +
        </button>
      </div>
      <div>
        <button className="btn" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Ques3;
