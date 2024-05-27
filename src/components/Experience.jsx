import Button from "./Button"
export default function() {
    return (
        <>
            <div className="cursor-default select-none box-border max-w-screen-md mx-auto mt-10">
                <div className="mx-8 my-2 border-b border-solid border-black pb-5 flex flex-row justify-between">
                    <h2 className="text-base font-semibold">WORK EXPERIENCE</h2>
                    <Button 
                    content="Edit"
                    // onClick={handleClick}
                    />
                </div>
            </div>
        </>
        
    )
}