import { useState, useEffect } from 'react';
import AddTodo from './AddTodo/AddTodo';
import MyTodos from './MyTodos/MyTodos';
import { fetchData } from './API/API';
import { nanoid } from 'nanoid';

export const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchData().then(res =>
      setData([
        ...res.filter(a => !a.completed),
        ...res.filter(a => a.completed),
      ])
    );
  }, []);
  const onClickAddTodo = name => {
    const newName = { id: nanoid(), title: name, completed: false };
    setData([newName, ...data]);
  };
  const dataFilter = data.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );
  const onChangeFilter = evt => {
    setFilter(evt.target.value);
  };
  const onChangeComplited = id => {
    setData(
      data.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <>
      <div></div>
      <div>
        <h1>Todo App</h1>
        <div>
          <AddTodo onClick={onClickAddTodo} />
          <MyTodos
            data={dataFilter}
            onChange={onChangeFilter}
            onTakeId={onChangeComplited}
          />
        </div>
      </div>
    </>
  );
};
