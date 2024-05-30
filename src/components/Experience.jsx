
import { useState } from "react";
import Job from "./Job"
import Button from "./Button";

export default function Experience() {
    const workExperience = [
        {
            id: 1,
            title: "Position",
            company: "Company XYZ",
            description: "Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful.",
            year: "[Mon -Year] - [Mon -Year]" 
        }
    ]

    const [jobs, setJobs] = useState(workExperience);
    const [input, setInput] = useState(false);

    const handleAdd = () => {
        const newJob = { 
            id: jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1,
            title: "Position",
            company: "Company XYZ",
            description: "Some stuff about the work that you’ve done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Don’t make it too long, keep it short but meaningful.",
            year: "Jan 2022 - Jun 2023" 
        };
        setJobs([...jobs,newJob]);
    }

    const handleEditClick = () => {
        setInput(!input);
    }

    const handleChange = (e, jobId) => {
        const { name, value } = e.target;
        setJobs(prevJobs => {
            return prevJobs.map(job => {
                if (job.id === jobId) {
                    return {...job, [name]: value };
                } else {
                    return job;
                }
            });
        });
    };

    const handleDelete = (jobId) => {
        setJobs(prevJobs => {
            return prevJobs.filter(job => job.id!== jobId);
        });
    };
    

    return (
            <>
                <div className="cursor-default select-none box-border max-w-screen-md mx-auto mt-10 text-sm group">
                    <div className="mx-8 mt-2 mb-4 border-b border-solid border-black pb-5">
                        <h2 className="text-base font-semibold">WORK EXPERIENCE</h2>   
                    </div>
                    {
                        (input !== false) 
                        && 
                        (
                            <div className="flex justify-end me-9">
                                <Button 
                                content="Save"
                                onClick={handleEditClick}
                                />
                            </div>
                        )
                    }

                    
                    {jobs.length > 0? 
                        (
                            jobs.map((job) => (
                                <Job
                                    key={job.id}
                                    id={job.id} 
                                    title={job.title}
                                    company={job.company} 
                                    description={job.description}
                                    year={job.year}
                                    handleEdit={handleEditClick}
                                    handleChange={handleChange}
                                    handleDelete={handleDelete}
                                    input={input}
                                />
                            ))
                        ) 
                        : 
                        (
                        <p className="my-2 pl-10 pt-2">No experience added yet...</p>
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
};