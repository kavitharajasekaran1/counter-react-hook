import Counter from "./component/counter";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

console.log(rootReducer, "reseee");

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}
