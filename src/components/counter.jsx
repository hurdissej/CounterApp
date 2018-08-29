import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevprops and state", prevProps, prevState);
    // Can do comparisons here to check if we need new data
  }

  componentWillUnmount() {
    console.log("Counter unmounted");
    // Can do any cleaning up you need here to remove unncecessary state
  }

  render() {
    console.log("Counter rendered!");
    return (
      <div className="row">
        <div className="col-sm-1">
          <span className={this.getClassForCount()}>{this.formatCount()}</span>
        </div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className={this.getClassForDecrement()}
        >
          {" "}
          -{" "}
        </button>
        <button
          className="button btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          X
        </button>
      </div>
    );
  }

  getClassForCount() {
    let classBase = "badge m-2 badge-";
    return (classBase += this.isZero() ? "warning" : "primary");
  }

  getClassForDecrement() {
    let classBase = "btn btn-secondary btn-sm m-2 ";
    return (classBase += this.isZero() ? "disabled" : "");
  }

  isZero() {
    return this.props.counter.value === 0 ? true : false;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
