import React, {useState} from "react";

export default function AddEvent({ onAddEvent }) {
    const [id, setId] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [month, setMonth] = useState('');

    return (
      <>
        <input
          placeholder="Add New ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <input
          placeholder="Add Gender"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
        <input
          placeholder="Add Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          placeholder="Add Month"
          value={month}
          onChange={e => setMonth(e.target.value)}
        />
        <button onClick={() => {
          setId(''); setGender(''); setAge(''); setMonth('');
          onAddEvent(id); onAddEvent(gender); onAddEvent(age); onAddEvent(month);
        }}>Add</button>
      </>
    )
}

