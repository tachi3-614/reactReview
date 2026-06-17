import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="container">
      <h1>React TODOアプリ</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="何をする？" 
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">追加</button>
      </form>

      <p style={{ color: "#666" }}>入力中のテキスト: {inputText}</p>

      <hr />

      <ul className="todo-list">
        <TodoItem task="Reactのコンポーネントを学ぶ" />
        <TodoItem task="WordPressの資料を作る" />
      </ul>
    </div>
  );
};

export default App;