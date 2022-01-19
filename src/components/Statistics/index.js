import React from "react";

class Statistics extends React.Component {
  render() {
    return (
      <section className="statistics">
        <h2 className="title">{this.props.stats}</h2>

        <ul className="stat-list">
          {this.props.statistics.map((elem, index) => (
            <li className="item" key={elem.id}>
              <span className="label">{elem.label}</span>
              <span className="percentage">{elem.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default Statistics;
