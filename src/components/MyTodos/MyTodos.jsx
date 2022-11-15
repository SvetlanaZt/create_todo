import FilterName from '../FilterName/FilterName';
import ComplitedMyTodo from '../ComplitedMyTodo/ComplitedMyTodo';
import { useState, useEffect } from 'react';
import {
  StyledDiv,
  Styledh2,
  StyledUl,
  StyledLi,
  StyledDivWraper,
  StyledDivInput,
  StyledInput,
} from './MyTodos.styled';

export default function MyTodos({ data, onChange, onChangeComplited }) {
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

  return (
    <StyledDiv>
      <StyledDivWraper>
        <Styledh2>My Todos</Styledh2>
        <FilterName onChange={onChange} />
      </StyledDivWraper>
      <ComplitedMyTodo onClick={onClickComplited} />

      <StyledUl>
        {true &&
          dataFilter.map(item => (
            <StyledLi key={item.id}>
              {item.title}
              <StyledDivInput itemBoole={item.completed}>
                <StyledInput
                  type="checkbox"
                  onChange={() => onChangeComplited(item.id)}
                />
              </StyledDivInput>
            </StyledLi>
          ))}
      </StyledUl>
    </StyledDiv>
  );
}
