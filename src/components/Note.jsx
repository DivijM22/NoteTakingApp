export default function Note(props)
{
    function handleClick(event)
    {
        console.log(props.id);
        props.onDelete(Number(props.id));
        return;
    }

    return(
        <div className="flex flex-col max-w-[200px] w-full gap-[10px] border-2 rounded-xl p-4 bg-white text-gray-400">
            <div className="title text-xl font-bold">
                <h1>{props.title}</h1>
            </div>
            <div className="content">
                <p>
                    {props.content}
                </p>
            </div>

            <div className="flex h-full justify-end items-end">
                <button onClick={handleClick} className="flex hover:bg-slate-300 justify-center items-center bg-slate-100 text-yellow-500 rounded-xl p-1">Delete</button>
            </div>
        </div>
    )
}