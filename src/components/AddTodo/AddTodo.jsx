export default function AddTodo({ onChange }) {
  return (
    <div>
      <h2>Add todo</h2>
      <form>
        <input type="text" onChange={onChange} placeholder="Todo name"></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
}
