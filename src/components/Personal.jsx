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
    const [input, setInput] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
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
                (<div>
                    <div className="mx-auto w-96 p-10">
                        <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={value.name} 
                                className="block w-96 text-5xl font-bold text-center "
                                onChange={handleChange}
                        />
                    </div>
                    <h2 className="text-2xl mx-8 my-2 border-b border-solid border-black pb-5">PERSONAL DETAILS</h2>
                    <form className="mt-5 pl-10 pt-5">
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            value={value.address} 
                            className="block w-80 text-lg"
                            onChange={handleChange}
                         />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={value.email} 
                            className="block w-64 mt-1 text-lg"
                            onChange={handleChange}
                        />
                        <input 
                            type="tel" 
                            id="phoneNumber" 
                            name="phoneNumber"
                            value={value.phoneNumber} 
                            className="block w-64 mt-1 text-lg"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            id="linkedIn" 
                            name="linkedIn" 
                            value={value.linkedIn} 
                            className="block w-80 mt-1 text-lg"
                            onChange={handleChange}                           
                         />
                        <Button 
                        content="Save"
                        onClick={handleClick}
                        />
                    </form>
                </div>
                )
                :
                (
                <div>
                    <div className="text-center text-5xl font-bold p-10">{value.name}</div>
                    <div>
                        <h2 className="text-2xl mx-8 my-2 border-b border-solid border-black pb-5">PERSONAL DETAILS</h2>
                        <div className="mt-5 pl-10 pt-5">
                            <p className="text-lg mt-5">{value.address}</p> 
                            <p className="text-lg mt-1">{value.email}</p> 
                            <p className="text-lg mt-1">{value.phoneNumber}</p> 
                            <p className="text-lg mt-1">{value.linkedIn}</p>
                            <Button 
                            content="Edit"
                            onClick={handleClick}
                        /> 
                        </div>
                    </div>
                   
                </div>

            )
            }
        </>

        
    )
}