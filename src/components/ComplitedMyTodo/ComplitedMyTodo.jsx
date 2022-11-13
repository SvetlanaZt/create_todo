export default function ComplitedMyTodo({ onClick }) {
  return (
    <div>
      <p onClick={() => onClick('all')}>Все /</p>
      <p onClick={() => onClick('complited')}>Выполненные /</p>
      <p onClick={() => onClick('notComplited')}>Не выполненные</p>
    </div>
  );
}
