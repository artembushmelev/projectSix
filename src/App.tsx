import { useState } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./store/store";
import { CountStateType, DecrimentAC, IncrementAC } from "./countReducerRedux";

function App() {
  const counter = useSelector<AppStateType, CountStateType>((state) => state.count);
  const dispath = useDispatch();

  const onClickPlus = () => {
    dispath(IncrementAC());
  };
  const onClickMinus = () => {
    dispath(DecrimentAC());
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{counter.count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
