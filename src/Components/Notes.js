import { useState, useEffect, use } from "react";
import "./Notes.css";

function Notes() {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("my-notes")
        return saved ? JSON.parse(saved) : [];
    });
    const [input , setInput] = useState("");

    useEffect(() => {
        localStorage.setItem('my-notes', JSON.stringify(notes));
      }, [notes]);

    const addNote = () => {
        if (input.trim()) {
            setNotes([input, ...notes]);
            setInput("");

        }
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <div className="notes-cont">
            <div className="notes-input">
                < input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write your notes here..."
                />

                <button onClick={addNote}>Add Note</button>
            </div> 
            <div className="note-list">
            {notes.map((note, index) => (
                 <div className="note" key={index}>
        </div>
    )

}