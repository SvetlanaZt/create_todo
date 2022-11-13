import FilterName from '../FilterName/FilterName';
import ComplitedMyTodo from '../ComplitedMyTodo/ComplitedMyTodo';
import { useState } from 'react';

export default function MyTodos({ onChange, data }) {
  const [dataFilter, setDataFilter] = useState(data);
  console.log(dataFilter);

  const onClickComplited = status => {
    if (status === 'all') {
      setDataFilter(data);
    } else if (status === 'complited') {
      setDataFilter(data.filter(item => item.completed));
    } else if (status === 'notComplited') {
      setDataFilter(data.filter(item => !item.completed));
    }
  };

  return (
    <div>
      <h2>My Todos</h2>
      <FilterName onChange={onChange} />
      <ComplitedMyTodo onClick={onClickComplited} />

      <ul>
        {dataFilter &&
          dataFilter.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}
