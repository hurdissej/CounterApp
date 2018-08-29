import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };
  constructor() {
    super();
    console.log("app - Constructor");
  }
  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(x => x.id != counterId);
    this.setState({ counters }); // onDelete
  };

  handleReset = () => {
    const count = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ count });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters }); // onDelete
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value === 0) {
      return;
    } else {
      counters[index].value--;
      this.setState({ counters }); // onDelete
    }
  };

  componentDidMount() {
    console.log("app - Mounted");
  }
  render() {
    console.log("app - rendered");
    return (
      <React.Fragment>
        <NavBar numberOfCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
