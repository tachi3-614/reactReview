const element = <h1>Hello,React!</h1>

const name = "田中";
const element2 = <p>こんにちは、{name}さん</p>

function TodoItem() {
  return (
    <li className="todo-item">
      <span>Reactを勉強する</span>
      <button>削除</button>
    </li>
  );
};

function App() {
  const title = "マイTODOアプリ";

  return (
    <div className="container">
      <h1>{title}</h1>
      <ul>
        {/* 部品を再利用する */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default App;