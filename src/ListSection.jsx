import "./ListSection.css";

function ListSection({ todos, onDeleteTodo }) {
  return (
    <div className="displayList">
      <table>
        <caption>
          <p className="todocaption">My TODOS</p>
        </caption>
        <thead>
          <tr>
            <th>
              <p>Todolist</p>
            </th>
            <th>
              <p>Date</p>
            </th>
            <th>
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody id="todo-body">
          {todos.length === 0 ? (
            <tr>
              <td>No todos yet!! Add some Above.</td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>{todo.date || "No Date"}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListSection;
