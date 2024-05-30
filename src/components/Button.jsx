

export default function Button({content, onClick}) {
    
    return (
        <button className="text-xs border border-black hover:border-slate-400 px-1 border-4 me-1 hidden group-hover:block" onClick={onClick}>{content}</button>
    )
}