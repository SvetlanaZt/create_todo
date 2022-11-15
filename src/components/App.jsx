import { useState, useEffect } from 'react';
import AddTodo from './AddTodo/AddTodo';
import MyTodos from './MyTodos/MyTodos';
import { fetchData } from './API/API';
import { nanoid } from 'nanoid';
import {
  StyledDiv,
  StyledDivContainer,
  StyledH1,
  StyledDivWraper,
} from './App.styled';

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
  const onChangeComplited = id => {
    setData(
      data.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
      // .sort((a, b) => a.completed - b.completed)
    );
  };
  const dataFilter = data.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );
  const onChangeFilter = evt => {
    setFilter(evt.target.value);
  };
  return (
    <>
      <StyledDiv></StyledDiv>
      <StyledDivContainer>
        <StyledH1>Todo App</StyledH1>
        <StyledDivWraper>
          <AddTodo onClick={onClickAddTodo} />
          <MyTodos
            data={dataFilter}
            onChange={onChangeFilter}
            onChangeComplited={onChangeComplited}
          />
        </StyledDivWraper>
        <div></div>
      </StyledDivContainer>
    </>
  );
};
