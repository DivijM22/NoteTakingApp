import { useState } from "react";

export default function CreateArea(props)
{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("")

    function handleChange(event)
    {
        const {target}=event;
        const {value,name}=target;
        name==="title" ? setTitle(value) : setContent(value);
        return;
    }

    function handleClick(event)
    {
        const note={
            title: title,
            content: content
        };
        props.onSubmit(note);
        setTitle("");
        setContent("");
        event.preventDefault();
    }

    return (
        <div className="border-2 mt-[60px] px-6 py-3 rounded-xl max-w-md w-full bg-white text-gray-400">
            <div className="flex flex-col items-start">
                <input className="w-full font-bold text-2xl" name="title" placeholder="Title" value={title} onChange={handleChange}/>
                <textarea className="w-full border-black mt-[10px] text-xl" name="content"  rows="3" placeholder="Take a note ..." value={content} onChange={handleChange}>
                </textarea>
                <div className="flex w-full justify-end">
                    <button onClick={handleClick} className="flex justify-center items-center text-2xl text-white hover:bg-yellow-500 bg-yellow-400 rounded-[100%] font-bold px-4 py-2">+</button>
                </div>
            </div>
        </div>
    );  
}