import Button from "./Button"


export default function Job({id, title, company, description, year, handleEdit, handleChange, handleDelete, input}) {

    const handleEditClick = () => {
        handleEdit(input);
        console.log(id)
        
    };
    return (
        <>
            {input ? 
            (
            <>
                <div className="flex justify-end me-9">
                    <Button 
                    content="Save"
                    // onClick={handleEditClick}
                    />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row mt-2 pt-2 justify-between px-10">
                    <div className="me-10 order-2 sm:order-2 md:order-1 w-11/12">
                        <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={title} 
                                className="block w-48 mb-3"
                                // onChange={}
                        />
                        <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={company} 
                                className="block w-48 mb-3"
                                // onChange={}
                        />
                        <textarea 
                            id="summary" 
                            name="summary" 
                            className="text-sm text-justify h-24 w-full select-text mb-5"
                            value={description}
                            // onChange={}
                        />
                    </div>
                    <div className="h-full w-9/12 align-right order-1 sm:order-1 md:order-2 mb-3 md:w-2/6">
                        <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={year} 
                                className="block w-40 mb-3"
                                // onChange={}
                        />
                    </div>
                </div>  
            </>   
            
            )
            :
            (
            <>
                <div className="flex justify-end me-9">
                    <Button 
                    content="Edit"
                    onClick={handleEditClick}
                    />
                    <Button 
                    content="Delete"
                    // onClick={handleDeleteClick}
                    />
                </div>
                <div className="flex flex-col sm:flex-col md:flex-row mt-2 pt-2 justify-between px-10">
                    <div className="me-10 order-2 sm:order-2 md:order-1">
                        <h1 className="mb-3">{title}</h1>
                        <h1 className="mb-3">{company}</h1>
                        <h1 className="text-justify mb-5">{description}</h1>
                    </div>
                    <div className="h-full w-9/12 align-right srder-1 sm:order-1 md:order-2 mb-3">
                        <h1>{year}</h1>
                    </div>
                </div>
            </>    
            )
            }
            
        </>
    )
}