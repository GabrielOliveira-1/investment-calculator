import "./Table.css";

const Table = (props) => {
  // if (props.items.length === 0) {
  //   return <h2 className="result">No investment input.</h2>;
  // }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.items.map((line) => (
        <tbody>
          <td>{line.year}</td>
          <td>{line.yearlyInterest}</td>
          <td>{line.savingsEndOfYear}</td>
          <td>{line.yearlyContribution}</td>
        </tbody>
      ))}
      {/* <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tbody> */}
    </table>
  );
};
export default Table;
