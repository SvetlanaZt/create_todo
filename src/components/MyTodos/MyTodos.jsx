import FilterName from '../FilterName/FilterName';
import ComplitedMyTodo from '../ComplitedMyTodo/ComplitedMyTodo';
import { useState, useEffect } from 'react';

export default function MyTodos({ data, onChange }) {
  const [dataFilter, setDataFilter] = useState(data);

  useEffect(() => {
    setDataFilter(data);
  }, [data]);

  const onClickComplited = status => {
    if (status === 'all') {
      setDataFilter(data);
    } else if (status === 'complited') {
      setDataFilter(data.filter(item => item.completed));
    } else if (status === 'notComplited') {
      setDataFilter(data.filter(item => !item.completed));
    }
  };
  const onChangeComplited = id => {
    setDataFilter(
      data.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h2>My Todos</h2>
      <FilterName onChange={onChange} />
      <ComplitedMyTodo onClick={onClickComplited} />

      <ul>
        {true &&
          dataFilter.map(item => (
            <li key={item.id}>
              {item.title}
              <input
                type="checkbox"
                onChange={() => onChangeComplited(item.id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
