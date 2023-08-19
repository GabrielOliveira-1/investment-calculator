import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Table from "./Components/Table";

// let yearlyData = []; // per-year results

function App(props) {
  // Changed to derived state, so whenever we receive an userInput, the component function will re-executethe component and the calculations code will re-execute as well
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.savings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.interests / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculateBtnPress={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table items={userInput} />
    </div>
  );
}

export default App;
