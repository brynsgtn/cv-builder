import { useState } from "react"
import Button from "./Button"

export default function Summary() {

    const [summary, setSummary] = useState("I am a dedicated and results-driven professional with over five years of experience in project management and team leadership. Adept at streamlining operations, improving efficiency, and fostering collaboration among cross-functional teams, I have a proven track record of successfully delivering complex projects on time and within budget.")
    const [input, setInput] = useState(false);

    const handleChange = (e) => {

        setSummary(e.target.value);
        console.log("Typing!")
    }
    
    const handleClick = () => {
        setInput(!input);
        console.log("Button Clicked!")
    }
    return (
        <>
            {
                input ? 
                (
                <div className="box-border max-w-screen-md mx-auto mt-10">
                    <div className="mx-8 my-2 border-b border-solid border-black pb-5 flex flex-row justify-between">
                        <h2 className="text-base font-semibold">SUMMARY</h2>
                        <Button 
                        content="Save"
                        onClick={handleClick}
                        />
                    </div>
                    <div className="mt-5 px-10 pt-2 h-24">
                        <textarea 
                            id="summary" 
                            name="summary" 
                            className="text-sm text-justify h-full resize-none w-full select-text"
                            value={summary}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                )
                :
                (
                <div className="box-border max-w-screen-md mx-auto mt-10">
                    <div className="mx-8 my-2 border-b border-solid border-black pb-5 flex flex-row justify-between">
                        <h2 className="text-base font-semibold">SUMMARY</h2>
                        <Button 
                        content="Edit"
                        onClick={handleClick}
                        />
                    </div>
                    <div>
                        <p className="text-sm mt-5 px-10 pt-2 text-justify">{summary}</p>
                    </div>
                </div>
                )
            }

        </>

    )
}