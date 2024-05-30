import { useState } from "react"
import Button from "./Button";


export default function Skills() {
    const skills = "HTML - CSS - JavaScript - NodeJs - ReactJS - ExpressJS"
    const [value, setValue] = useState(skills);
    const [input, setInput] = useState(false)

    const handleClick = () => {
        setInput(!input);
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
            <>
                {
                    input ? 
                            (
                                <div className="box-border max-w-screen-md mx-auto mt-10 group">
                                    <div className="flex flex-row justify-between mx-8 my-2 border-b border-solid border-black pb-5">
                                        <h2 className="text-base font-semibold">SKILLS</h2>
                                        <Button 
                                            content="Save"
                                            onClick={handleClick}
                                            />
                                    </div>
                                    <div className="mt-5 px-10 pt-2 h-12">
                                        <textarea 
                                            id="skills" 
                                            name="skills" 
                                            className="text-sm text-justify h-8 resize-none w-full select-text"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="box-border max-w-screen-md mx-auto mt-10 pb-5 group">
                                    <div className="mx-8 my-2 border-b border-solid border-black pb-5 flex flex-row justify-between">
                                        <h2 className="text-base font-semibold">SKILLS</h2>
                                        <Button 
                                        content="Edit"
                                        onClick={handleClick}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm mt-5 px-10 pt-2 text-justify">{value}</p>
                                    </div>
                                </div>
                             )
                }
            </>
        )
}