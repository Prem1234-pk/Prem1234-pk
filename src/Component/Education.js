import listOfEducation from "../Files/listOfEducation";
import EachEducation from "./EachEducation";

function Education() {
    return (<>
        <div className="body">
            <h1 className='heading'>Education</h1>
            <div className="education"> 
                {listOfEducation.map((item,index)=>{
                    return (<EachEducation item={item}  key={index} />)
                })}
            </div>
        </div>
    </>)
}
export default Education;