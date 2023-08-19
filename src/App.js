import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Table from "./Components/Table";

// let yearlyData = []; // per-year results

function App(props) {
  const [tableData, setTableData] = useState([]);

  let yearlyData = [];

  const calculateHandler = (userInput) => {
    yearlyData = [];
    // setTableData("");
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput.savings; // We can change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: we can change the shape...
    const expectedReturn = +userInput.interests / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...

    setTableData((prevTableData) => {
      return tableData;
    });

    console.log(tableData);
    console.log("------------");
    console.log(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onCalculateBtnPress={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table items={yearlyData} />
    </div>
  );
}

export default App;
