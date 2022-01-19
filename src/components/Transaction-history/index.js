import React from "react";

class TransactionHistory extends React.Component {
  render() {
    return (
      <table className="transaction-history">
        {this.props.transactionHistory.map((elem, index) => (
          <thead key={index}>
            <tr>
              <th className="type">{elem.type}</th>
              <th className="amount">{elem.amount}</th>
              <th className="currency">{elem.currency}</th>
            </tr>
          </thead>
        ))}
      </table>
    );
  }
}
export default TransactionHistory;
