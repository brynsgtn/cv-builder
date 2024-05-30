import { useState } from "react"
import Button from "./Button"

export default function Summary() {

    const initialSummary = "I am a dedicated and results-driven professional with over [X] years of experience in [Field/Industry]. Adept at [Key Skills], [Key Skills], and fostering collaboration among [Team Type], I have a proven track record of successfully delivering [Type of Projects] on time and within budget."
    
    const [summary, setSummary] = useState(initialSummary);
    const [input, setInput] = useState(false);

    const handleChange = (e) => {
        setSummary(e.target.value);
    }
    
    const handleClick = () => {
        setInput(!input);
    }
    return (
        <>
            {
                input ? 
                    (
                        <div className="box-border max-w-screen-md mx-auto mt-10 group">
                            <div className="mx-8 my-2 border-b border-solid border-black pb-5 flex flex-row justify-between">
                                <h2 className="text-base font-semibold">SUMMARY</h2>
                                <Button 
                                content="Save"
                                onClick={handleClick}
                                />
                            </div>
                            <div className="mt-5 px-10 pt-2 h-32">
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
                        <div className="box-border max-w-screen-md mx-auto mt-10 group">
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