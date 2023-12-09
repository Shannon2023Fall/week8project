import React,{ useState } from 'react'
import './App.css'
import NewEditor from './NewEditor.jsx';
import AddEvent from './AddEvent.jsx';

let nextId = 13;
export default function EventApp() {
    const [events, setEvents] = useState(accidents);

    function handleAddEvent(gender, age, month){
        setEvents([
            ...events,
            {
                id: nextId++,
                gender: gender,
                age: age,
                month: month
            }
        ]);
    }

    function handleChangeEvent(nextEvent){
        setEvents(events.map(t => {
            if (t.id === nextEvent.id){
                return nextEvent;
            } else {
                return t;
            }
        }));
    }

    function handleDeleteEvent(eventId) {
        setEvents(
            events.filter(t => t.id !== eventId)
        );
    }

    return (
        <>
        <AddEvent
        onAddEvent={handleAddEvent} 
        />
        <EventList
        events={events}
        onChangeEvent={handleChangeEvent}
        onDeleteEvent={handleDeleteEvent}       
        />
        </>    
    );
}
