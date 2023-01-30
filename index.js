// To-Do List, this is the main JavaScript file for the App. It uses React, so the initial state can be updated to a new state. It sets initial values of To-Dos and sets isCompleted to false, so the items can be modified. It includes two functions: addTodo and removeTodo.
function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ]);
// The addTodo function creates a copy of the todos list using the spread operator. It sets initial values of To-Dos and sets isCompleted to false, so the items can be modified. The setTodos updates the list to the new state.
  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
// The removeTodo function grabs a todo by its index. It creates a temporary new list using the spread operator ...todos. Then, it removes 1 item from the list by index. Finally, setTodos updates the list to the new state.
  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
// This returns the content that will be printed in the browser. The className calls classes from styles.css.
  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
// This uses the React DOM to render the updated state of the list by rendering it in the root div in index.html.
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
