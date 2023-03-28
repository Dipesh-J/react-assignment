import React, { useState } from "react";

const Ques2 = () => {
  const [buttonClicks, setButtonClicks] = useState([]);

  const handleClick = (buttonName) => {
    const currentTime = new Date().toLocaleString();
    setButtonClicks([...buttonClicks, { name: buttonName, time: currentTime }]);
  };

  return (
    <div>
      <button className="btn" onClick={() => handleClick("Button A")}>Button A</button>
      <button className="btn" onClick={() => handleClick("Button B")}>Button B</button>
      <button className="btn" onClick={() => handleClick("Button C")}>Button C</button>
      <button className="btn" onClick={() => handleClick("Button D")}>Button D</button>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th>Button Name</th>
            <th>Time Clicked</th>
          </tr>
        </thead>
        <tbody>
          {buttonClicks.map((click, index) => (
            <tr key={index}>
              <td>{click.name}</td>
              <td>{click.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ques2;
