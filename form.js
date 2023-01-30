// To-Do List, this is the form that contains the list items. It uses React's useState to manage the compenent's initial and updated states
// User input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}