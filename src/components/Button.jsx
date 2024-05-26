

export default function Button({content, onClick}) {
    
    return (
        <button className="text-md border border-black hover:border-slate-400 rounded-none px-5 mt-5" onClick={onClick}>{content}</button>
    )
}