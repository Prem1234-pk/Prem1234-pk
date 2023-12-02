import listOfCertificate from "../Files/listOfCertificate";
import EachCertificate from "./EachCertificate";

function Certificate() {
    return (<>
        <div className="body">
            <h1 className='heading'>Certificate</h1>
            <div className="education"> 
                {listOfCertificate.map((item,index)=>{
                    return (<EachCertificate item={item}  key={index} />)
                })}
            </div>
        </div>
    </>);
}
export default Certificate