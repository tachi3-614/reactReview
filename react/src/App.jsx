import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="container">
      <h1>React TODOアプリ</h1>

      <form>
        <input type="text" placeholder="何をする？" />
        <button type="submit">追加</button>
      </form>

      <hr />

      <ul className="todo-list">
        <TodoItem task="Reactのコンポーネントを学ぶ" />
        <TodoItem task="WordPressの資料を作る" />
        <TodoItem task="お気に入りのIPAビールを買う" />
      </ul>
    </div>
  );
}

export default App;