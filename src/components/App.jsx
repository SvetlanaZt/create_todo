import { useState, useEffect } from 'react';
import AddTodo from './AddTodo/AddTodo';
import MyTodos from './MyTodos/MyTodos';
import { fetchData } from './API/API';

export const App = () => {
  const [data, setData] = useState([]);
  const [setAddTodo] = useState('');
  const [setFilter] = useState('');

  useEffect(() => {
    fetchData().then(res =>
      setData([
        ...res.filter(a => !a.completed),
        ...res.filter(a => a.completed),
      ])
    );
  }, []);
  const onChangeAddTodo = evt => {
    setAddTodo(evt.target.value);
  };
  const onChangeFilter = evt => {
    setFilter(evt.target.value);
  };

  return (
    <>
      <div></div>
      <div>
        <h1>Todo App</h1>
        <div>
          <AddTodo onChange={onChangeAddTodo} />
          <MyTodos onChange={onChangeFilter} data={data} />
        </div>
      </div>
    </>
  );
};
