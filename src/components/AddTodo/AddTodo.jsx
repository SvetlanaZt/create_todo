import { useState } from 'react';
import {
  StyledDiv,
  StyledH2,
  StyledForm,
  StyledInput,
  StyledButton,
} from './AddTodo.styled';

export default function AddTodo({ onClick }) {
  const [contacts, setContacts] = useState('');

  const addTodo = e => {
    e.preventDefault();
    onClick(contacts.trim());
    reset();
  };

  const reset = () => {
    setContacts('');
  };

  return (
    <StyledDiv>
      <StyledH2>Add todo</StyledH2>
      <StyledForm onSubmit={addTodo}>
        <StyledInput
          onChange={e => setContacts(e.target.value)}
          type="text"
          name="name"
          value={contacts}
          placeholder="Todo name"
        />
        <StyledButton type="submit">+</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}
