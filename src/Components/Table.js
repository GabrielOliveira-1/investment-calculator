import classes from "./Table.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((lineData) => (
          <tr key={lineData.year}>
            <td>{lineData.year}</td>
            <td>{formatter.format(lineData.savingsEndOfYear)}</td>
            <td>{formatter.format(lineData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                lineData.savingsEndOfYear -
                  props.initialInvestment -
                  lineData.yearlyContribution * lineData.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  lineData.yearlyContribution * lineData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
