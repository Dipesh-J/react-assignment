import React, { useState } from "react";
import "./Form.css";

const Ques1 = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    pincode: "",
    mobileNumber: "",
  });

  const [savedData, setSavedData] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, pincode, mobileNumber } = formValues;
    setSavedData([
      ...savedData,
      { firstName, lastName, pincode, mobileNumber },
    ]);
    setFormValues({
      firstName: "",
      lastName: "",
      pincode: "",
      mobileNumber: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleOnChange}
            value={formValues.firstName}
          />
        </div>
        <br />
        <div className="input-group">
          <label htmlFor="">Last Name : </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleOnChange}
            value={formValues.lastName}
          />
        </div>
        <br />
        <div className="input-group">
          <label htmlFor="">Pincode : </label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            onChange={handleOnChange}
            value={formValues.pincode}
          />
        </div>
        <br />
        <div className="input-group">
          <label htmlFor="">Mobile Number : </label>
          <input
            type="number"
            name="mobileNumber"
            id="mobileNumber"
            onChange={handleOnChange}
            value={formValues.mobileNumber}
          />
        </div>
        <br />
        <div className="input-group">
          <button className="btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>SNo.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Pincode</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {savedData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.pincode}</td>
              <td>{data.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ques1;
