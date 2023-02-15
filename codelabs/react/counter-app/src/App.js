import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: -12 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleIncrement = (counter) => {
    const countersCopy = [...counters];
    const index = counters.indexOf(counter);
    countersCopy[index] = { ...counter };
    countersCopy[index].value++;
    setCounters(countersCopy);
  };

  const totalCounters = () => {
    return counters.filter((c) => c.value > 0).length;
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={totalCounters()} />
      <main className="container">
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          counters={counters}
        ></Counters>
      </main>
    </React.Fragment>
  );
};

export default App;
