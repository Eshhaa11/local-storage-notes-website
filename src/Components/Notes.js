import { useState, useEffect } from "react";
import "./Notes.css";

function Notes() {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("my-notes")
        return saved ? JSON.parse(saved) : [];
        
    })
}