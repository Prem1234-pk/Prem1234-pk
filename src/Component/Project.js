import listOfProject from "../Files/listOfProject";
import EachProject from "./EachProject";
function Project() {
    return (<>
        <div className="body">
            <h1 className='heading'>Projects</h1>
            <div className="education"> 
                {listOfProject.map((item,index)=>{
                    return (<EachProject item={item}  key={index} />)
                })}
            </div>
        </div>
    </>);
}
export default Project;