import { useDispatch, useSelector } from "react-redux";
import { incrementAsync, decrement } from "./store/counterSlice";
import "./styles.css";

export default function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      <button onClick={() => dispatch(decrement(12))}>-12</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(incrementAsync(1))}>+1</button>
      <button onClick={() => dispatch(incrementAsync(5))}>+5</button>
      <button onClick={() => dispatch(incrementAsync(12))}>+12</button>
    </div>
  );
}
