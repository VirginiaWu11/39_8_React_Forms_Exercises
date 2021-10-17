import "./App.css";
import BoxList from "./ColorBoxMaker/BoxList";
import TodoList from "./TodoApp/TodoList";

function App() {
  return (
    <>
      <div className="App">
        <BoxList />
      </div>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}

export default App;
