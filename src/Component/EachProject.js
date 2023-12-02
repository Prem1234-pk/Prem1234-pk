import { useState } from "react";
import Modal from '@material-ui/core/Modal';
function EachProject(props) {
    var item = props.item;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return(<>
<div className="eachEducation" onClick={handleOpen}>

<h2>{item.title}</h2><br />
<h4><u>Skills</u> :- {item.skill}</h4>
</div>
<Modal
            open={open}
            onClose={handleClose}
        >
            <div className="modal-content">
                <div>
                    <h2><u>Title</u> :-{item.title}</h2><br />
                    <h4><u>Objective</u> :- {item.objective}</h4>
                    <h4><u>Responsibilities</u> :- {item.responsibility}</h4>
                    <h4><u>Skills</u> :- {item.skill}</h4>
                    <h4><u>Duration</u> :- {item.duration}</h4>
                    <a href={item.githublink}>Go to Github by Clicking</a>
                </div>


                <button onClick={handleClose} style={{backgroundColor:"red",maxHeight:"20px",maxWidth:"25px"}}>X</button>
            </div>
        </Modal>


    </>);
}
export default EachProject;