import { useState } from "react";
import classes from "./Form.module.css";

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
      savings: +enteredSavings,
      yearlySavings: +enteredYearlySavings,
      interests: +enteredExpectedInterest,
      duration: +enteredInvestmentDuration,
    };
    props.onCalculateBtnPress(userInput);
    resetHandler();
  };

  const resetHandler = () => {
    setEnteredSavings("");
    setEnteredYearlySavings("");
    setEnteredExpectedInterest("");
    setEnteredInvestmentDuration("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
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
      <div className={classes["input-group"]}>
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
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
