import { useState } from "react"
import Button from "./Button";



export default function Personal() {
    const personalDetails = {
        name: "John Doe",
        address: "Somewhere State, Country",
        email: "Youremail@mail.com",
        phoneNumber: "123-456-7890",
        linkedIn: "https://www.linkedin.com/"
    }

    const [value, setValue] = useState(personalDetails);
    const [input, setInput] = useState(false)

    const handleChange = (e) => {
        setValue((prevValue) => ({
            ...prevValue,
            [e.target.name]: [e.target.value],
        }));
    }

    const handleClick = () => {
        setInput(!input);
    }
    return (
        <>
            {
                input ? 
                (<div className="box-border max-w-screen-md mx-auto">
                    <div className="p-9 text-center">
                        <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={value.name} 
                                className="text-4xl font-semibold w-64 text-center"
                                onChange={handleChange}
                        />
                        
                    </div>
                    <div className="flex flex-row justify-between mx-8 my-2 border-b border-solid border-black pb-5 ">
                        <h2 className="text-base font-semibold">PERSONAL DETAILS</h2>
                        <Button 
                            content="Save"
                            onClick={handleClick}
                            />
                    </div>
                    <form className="mt-5 pl-10 pt-2">
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            value={value.address} 
                            className="block w-64 text-sm"
                            onChange={handleChange}
                         />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={value.email} 
                            className="block w-64 mt-1 text-sm"
                            onChange={handleChange}
                        />
                        <input 
                            type="tel" 
                            id="phoneNumber" 
                            name="phoneNumber"
                            value={value.phoneNumber} 
                            className="block w-64 mt-1 text-sm"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            id="linkedIn" 
                            name="linkedIn" 
                            value={value.linkedIn} 
                            className="block w-64 mt-1 text-sm"
                            onChange={handleChange}                           
                         />
                    </form>
                </div>
                )
                :
                (
                <div className="cursor-default select-none box-border max-w-screen-md mx-auto">
                    <div className="flex flex-row justify-between p-9 ">
                        <h2 className="text-4xl font-semibold mx-auto">{value.name}</h2>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between border-b border-solid border-black pb-5  mx-8 my-2  ">
                            <h2 className="text-base font-semibold">PERSONAL DETAILS</h2>
                            <Button 
                            content="Edit"
                            onClick={handleClick}
                        /> 
                        </div>
                        <div className="mt-5 pl-10 pt-2">
                            <p className="text-sm">{value.address}</p> 
                            <p className="text-sm mt-1">{value.email}</p> 
                            <p className="text-sm mt-1">{value.phoneNumber}</p> 
                            <p className="text-sm mt-1">{value.linkedIn}</p>
                        </div>
                    </div>
                </div>

            )
            }
        </>

        
    )
}