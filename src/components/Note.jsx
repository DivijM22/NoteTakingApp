export default function Note(props)
{
    function handleClick(event)
    {
        console.log(props.id);
        props.onDelete(Number(props.id));
        return;
    }

    return(
        <div className="flex flex-col w-64 gap-[10px] border-2 rounded-xl p-4 bg-white text-gray-400">
            <h1 className="text-xl font-bold">{props.title}</h1>
            <div className="flex justify-start content m-0 p-0">
                <p className="whitespace-pre-line text-left">{props.content}</p>
            </div>

            <div className="flex h-full justify-end items-end">
                <button onClick={handleClick} className="flex hover:bg-slate-300 justify-center items-center bg-slate-100 text-yellow-500 rounded-xl p-1">Delete</button>
            </div>
        </div>
    )
}