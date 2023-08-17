import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [enteredSavings, setEnteredSavings] = useState("");
  const [enteredYearlySavings, setEnteredYearlySavings] = useState("");
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState("");
  const [enteredInvestmentDuration, setEnteredInvestmentDuration] =
    useState("");

  const savingsChangeHandler = (e) => {
    setEnteredSavings(e.target.value);
  };

  const yearlySavingsChangeHandler = (e) => {
    setEnteredYearlySavings(e.target.value);
  };

  const expectedInterestChangeHandler = (e) => {
    setEnteredExpectedInterest(e.target.value);
  };

  const investmentDurationChangeHandler = (e) => {
    setEnteredInvestmentDuration(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      savings: enteredSavings,
      yearlySavings: enteredYearlySavings,
      interests: enteredExpectedInterest,
      duration: enteredInvestmentDuration,
    };
    props.onCalculateBtnPress(userInput);

    setEnteredSavings("");
    setEnteredYearlySavings("");
    setEnteredExpectedInterest("");
    setEnteredInvestmentDuration("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredSavings}
            onChange={savingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlySavings}
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredExpectedInterest}
            onChange={expectedInterestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredInvestmentDuration}
            onChange={investmentDurationChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
