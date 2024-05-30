import Button from "./Button"
import { useState } from "react";


export default function Education() {

    const initialEducation = [
        {
            id: 1,
            course: "[Degree] in [Field of Study]",
            school: "[University/College]",
            year: "[Start Year] - [End Year]"
        }
    ]
    
    const [education, setEducation] = useState(initialEducation)
    const [input, setInput] = useState(false);


    const handleEditClick = () => {
        setInput(!input);
    }

    const handleChange = (e, educId) => {
        const { name, value } = e.target;
        setEducation(prevEduc => {
            return prevEduc.map(educ => {
                if (educ.id === educId) {
                    return {...educ, [name]: value };
                } else {
                    return educ;
                }
            });
        });
    };

    const handleAdd = () => {
        const newEducation = { 
            id: education.length > 0 ? education[education.length - 1].id + 1 : 1,
            course: "[Degree] in [Field of Study]",
            school: "[University/College]",
            year: "[Start Year] - [End Year]"
        };
        setEducation([...education,newEducation]);
    }

    const handleDelete = (educId) => {
        setEducation(prevEduc => {
            return prevEduc.filter(educ => educ.id!== educId);
        });
    };
    

    return (
        <>
            <div className="cursor-default select-none box-border max-w-screen-md mx-auto mt-10 text-sm group">
                <div className="mx-8 mt-2 mb-4 border-b border-solid border-black pb-5">
                    <h2 className="text-base font-semibold">EDUCATION</h2>   
                </div>
                {input ? 
                        (
                            <>
                                {(input !== false) 
                                && 
                                (
                                    <div className="flex justify-end me-9">
                                        <Button 
                                        content="Save"
                                        onClick={handleEditClick}
                                        />
                                    </div>
                                )}
                                    {education.map((educ) => {
                                        return (
                                                <div key={educ.id}className="pt-2 px-10">
                                                    <div className="me-10">
                                                        <input 
                                                                type="text" 
                                                                id="course" 
                                                                name="course" 
                                                                value={educ.course} 
                                                                className="block w-64 mb-3 font-semibold"
                                                                onChange={(e) => handleChange(e,educ.id)}
                                                        />
                                                        <input 
                                                                type="text" 
                                                                id="school" 
                                                                name="school" 
                                                                value={educ.school} 
                                                                className="block w-64 mb-3 italic"
                                                                onChange={(e) => handleChange(e,educ.id)}
                                                        />
                                                        <input 
                                                                type="text" 
                                                                id="year" 
                                                                name="year" 
                                                                value={educ.year} 
                                                                className="block w-64 mb-3"
                                                                onChange={(e) => handleChange(e,educ.id)}
                                                        />
                                                    </div>
                                                </div> 
                                            )
                                        })
                                    }
                            </> 
                        )
                        :  
                        (
                            <>
                                {education.length > 0 ? 
                                (
                                    education.map((educ) => {
                                    return (
                                            <div key={educ.id} >
                                                <div className="flex justify-end me-9">
                                                    <Button 
                                                    content="Edit"
                                                    onClick={handleEditClick}
                                                    />
                                                    <Button 
                                                    content="Delete"
                                                    onClick={() => handleDelete(educ.id)}
                                                    />
                                                </div>
                                                <div className="px-10 pt-2">
                                                    <p className="mb-3 font-semibold">{educ.course}</p>
                                                    <p className="mb-3 italic">{educ.school}</p>
                                                    <p className="text-justify mb-5">{educ.year}</p>
                                                </div>
                                            </div>
                                            )
                                        })
                                    ) 
                                    : 
                                    (
                                        <p className="my-2 pl-10 pt-2">Add your educational background...</p>
                                    )
                                }
                            </>
                        )
                }
                    <div className="pl-10">
                        <Button 
                            content="Add"
                            onClick={handleAdd}
                        />  
                    </div>
            </div>   
        </>
    )
}