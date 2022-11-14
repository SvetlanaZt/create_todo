import { StyledDiv, StyledP } from './ComplitedMyTodo.styled';
export default function ComplitedMyTodo({ onClick }) {
  return (
    <StyledDiv>
      <StyledP onClick={() => onClick('all')}>Все / </StyledP>
      <StyledP onClick={() => onClick('complited')}>Выполненные / </StyledP>
      <StyledP onClick={() => onClick('notComplited')}>Не выполненные </StyledP>
    </StyledDiv>
  );
}
