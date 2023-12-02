import Modal from '@material-ui/core/Modal';
import { useState } from "react";
function EachEducation(props) {
    var item = props.item;
    const [open, setOpen] = useState(false);
    const [rotation, setRotate] = useState(0);
    const [up, setUp] = useState(0);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [openImage, setOpenImage] = useState(false);

    const handleOpenImage = () => {
        setOpenImage(true);
    };

    const handleCloseImage = () => {
        setOpenImage(false);
    };
    const setRotation = () => {
        if (rotation >= 360) {
            setRotate(0);
        } else {
            setRotate(rotation + 45);
        }
    }
    const setDownFun = () => {
        if (up < 800) {
            setUp(up + 50);
        } else {
            setUp(0);
        }
    }
    const setUpFun = () => {
        if (up > -800) {
            setUp(up - 50);
        } else {
            setUp(0);
        }
    }
    return (<>
        <div className="eachEducation" onClick={handleOpen}>

            <h2>{item.university}</h2><br />
            <h3><u>SCHOOL</u> :- {item.schoolName}</h3>
            <h4><u>Course</u> :- {item.course}</h4>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="modal-content">
                <div>
                    <h2>{item.university}</h2><br />
                    <h3><u>SCHOOL</u> :- {item.schoolName}</h3>
                    <h4><u>Course</u> :- {item.course}</h4>
                    <h4><u>CourseType</u> :- {item.type}</h4>
                    <h4><u>Session</u> :- {item.session}</h4>
                    <h4><u>Grade</u> :- {item.grade}</h4>
                    <h4><u>CGPA/Percentage</u> :- {item.percentOrCGPA}</h4>
                    <img src={item.path} alt="certificateImage" onClick={handleOpenImage} />
                </div>
                <Modal open={openImage} onClose={handleCloseImage}>
                    <div style={{ display: "flex" }}>
                        <img
                            src={item.path}
                            alt='certificateImage'
                            className='certificateImg'
                            style={{
                                maxWidth: '80%',
                                maxHeight: '90%',
                                marginTop: `${up}px`,
                                transform: `rotate(${rotation}deg)`, // Apply rotation
                            }}
                        />
                        <ul style={{ display: "flex" ,flexDirection: "column"}}>

                        <button style={{ backgroundColor: "white", maxHeight: "20px", maxWidth: "50px" }} onClick={setUpFun}>up</button>
                        <button style={{ backgroundColor: "white", maxHeight: "20px", maxWidth: "50px" }} onClick={setRotation}>Rotate</button>
                        <button style={{ backgroundColor: "white", maxHeight: "20px", maxWidth: "50px" }} onClick={setDownFun}>Down</button>

                        <button style={{ backgroundColor: "red", maxHeight: "20px", maxWidth: "25px" }} onClick={handleCloseImage}>X</button>
                        </ul>
                    </div>

                </Modal>


                <button onClick={handleClose}>X</button>
            </div>
        </Modal>

    </>);
}

export default EachEducation;