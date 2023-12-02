import { useEffect, useState } from "react";
import logo from "../Files/logo.jpg";

function ageCalculator() {
    const formattedDate = '2000-01-20';
    const currentDate = new Date();
    const providedDate = new Date(formattedDate);
    const dateDifferenceInMillis = currentDate - providedDate;

    // Calculate the age
    const ageDate = new Date(dateDifferenceInMillis);
    const ageYear = ageDate.getUTCFullYear() - 1970;
    const ageMonth = ageDate.getUTCMonth();
    const ageDay = ageDate.getUTCDate();

    // Format the age in "yyyy-mm-dd" format
    const formattedAge = `${ageYear}-${(ageMonth + 1).toString().padStart(2, '0')}-${ageDay.toString().padStart(2, '0')}`;
    return formattedAge;
}
function Home() {

    const [age, setAge] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate asynchronous behavior by adding a delay (remove this in your actual implementation)
        setTimeout(() => {
            const calculatedAge = ageCalculator();
            setAge(calculatedAge);
            setLoading(false);
        }, 1000); // Replace 1000 with the actual delay in milliseconds
    }, []);
    // ageCalculator();
    // if (loading) {
    //     return (<h1>Loading</h1>)
    // }
    return (<>
        <div className="body" >
        <h1 className='heading'>Profile</h1>
           <div>

            <img src={logo} width="100" height="50" alt="logo" className="dp"/>
            <div className="info">
                <h1> SOFTWARE ENGINEAR</h1>
                <h2>PREMJEET KUMAR PANDIT</h2>
                <h2>IT Professional</h2>
            </div>
        </div>
        </div>
    </>)
}
export default Home;