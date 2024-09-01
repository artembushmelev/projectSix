import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { decrimentCount, incrementCount } from "./store2/counterSlice";
import { RootState } from "./store2/store2";

function App() {
  const { count } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(incrementCount());
  };
  const onClickMinus = () => {
    dispatch(decrimentCount());
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
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
