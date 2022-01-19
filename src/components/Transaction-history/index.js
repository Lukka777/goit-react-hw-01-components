import React from "react";

class TransactionHistory extends React.Component {
  render() {
    return (
      <table className="transaction-history">
        {this.props.TransactionHistory.map((elem, index) => (
          <thead key={index}>
            <tr>
              <th className="type">{this.props.type}</th>
              <th className="amount">{this.props.amount}</th>
              <th className="currency">{this.props.currency}</th>
            </tr>
          </thead>
        ))}
      </table>
    );
  }
}
export default TransactionHistory;
