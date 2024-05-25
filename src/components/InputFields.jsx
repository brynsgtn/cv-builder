import { useState } from "react"
import General from "./General";

export default function InputFields() {

    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [address, setAddress] = useState('Address')
    const [email, setEmail] = useState('Email')
    const [phoneNumber, setPhoneNumber] = useState('Phone Number')
    const [linkedIn, setLinkedIn] = useState('LinkedIn')
    const [preview, setPreview] = useState(false);



    const handleFirstName = (e) => setFirstName (e.target.value);
    const handleLasttName = (e) => setLastName (e.target.value);
    const handleAddress = (e) => setAddress (e.target.value);
    const handleEmail = (e) => setEmail (e.target.value);
    const handlePhoneNumber = (e) => setPhoneNumber (e.target.value);
    const handleLinkedIn = (e) => setLinkedIn (e.target.value);

    const handlePreview = () => {
        setPreview(!preview);

    }



    

    return (
        <>
        {
            preview ? 
            <>
            <button onClick={handlePreview}>Edit</button>
            <General firstName = {firstName} lastName={lastName} address={address} email={email} phoneNumber={phoneNumber} linkedIn={linkedIn}/>
            </>
            :
            <>
            <form onSubmit={handlePreview}>
                <h2>Personal Details</h2>
                <label>First name:</label><br/>
                <input type="text" id="fname" name="fname" placeholder="First Name"  onChange={handleFirstName}/><br/>
                <label>Last name:</label><br/>
                <input type="text" id="lname" name="lname" placeholder="Last Name"  onChange={handleLasttName}/><br/>
                <label>Address:</label><br/>
                <input type="text" id="address" name="address" placeholder="Address"  onChange={handleAddress}/><br/>
                <label>Enter your email:</label><br/>
                <input type="email" id="email" name="email" placeholder="youremail@mail.com" onChange={handleEmail}/><br/>
                <label>Enter a phone number:</label><br/>
                <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handlePhoneNumber}/><br/>
                <label>LinkedIn:</label><br/>
                <input type="url" id="linkedin" name="linkedin" placeholder="LinkedIn" onChange={handleLinkedIn}></input>
                <input type="submit" value="Preview" />
            </form>
            
            <General firstName = {firstName} lastName={lastName} address={address} email={email} phoneNumber={phoneNumber} linkedIn={linkedIn}/>
            </>
        }

            

            
           
        </>
    )
}