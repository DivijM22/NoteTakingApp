import "./App.css"
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import { useState } from "react";

export default function App()
{

    const [notes,setNotes]=useState([]);

    function addNote(note)
    {
        setNotes([...notes,note]);
        return;
    }

    function deleteNote(id)
    {
        const filteredNotes=notes.filter((note,index)=>index!==id);
        setNotes(filteredNotes);
    }

    return (
        <div className="flex flex-col items-center max-w-full w-full min-h-screen">
            <Header/>
            <CreateArea onSubmit={addNote}/>
            <div className="items-start w-screen p-12 flex gap-7">
                {
                    notes.map((note,index)=>{
                        if(note.content!=="")
                            return <Note onDelete={deleteNote} id={index} key={index} content={note.content} title={note.title}/>
                    })
                }
            </div>
        </div>
    );
}