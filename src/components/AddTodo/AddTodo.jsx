import { useState } from 'react';

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
    <div>
      <form onSubmit={addTodo}>
        <input
          onChange={e => setContacts(e.target.value)}
          type="text"
          name="name"
          value={contacts}
          placeholder="Todo name"
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
