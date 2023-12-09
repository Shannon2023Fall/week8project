import React, {useState} from "react";

export default function AddEvent({ onAddEvent }) {
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [month, setMonth] = useState('');

    return (
      <>
        <input
          placeholder="Add Male or Female"
          value={gender}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Add Age"
          value={age}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Add Month"
          value={month}
          onChange={e => setTitle(e.target.value)}
        />
        <button onClick={() => {
          setGender(''); setAge(''); setMonth('');
          onAddEvent(gender); onAddEvent(age); onAddEvent(month);
        }}>Add</button>
      </>
    )
}

