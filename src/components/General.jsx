


export default function General({firstName, lastName, address, email, phoneNumber, linkedIn}) {
    return (
        <>
            <h1>Your Full Name: {firstName} {lastName}</h1>
            <h2>Personal Details</h2>
            <p>Email address: {email}</p>
            <p>Phone number: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>LinkedIn: {linkedIn}</p>
        </>
        
    )
}