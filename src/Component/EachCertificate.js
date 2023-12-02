import Modal from '@material-ui/core/Modal';
import { useState } from "react";
function EachCertificate(props) {
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

            <h2>{item.certificateName}</h2><br />
            <br /><br />
            <h4><u>YEAR</u> :- {item.year}</h4>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="modal-content" >
                <div>
                    <h2>{item.certificateName}</h2><br />
                    <h3><u>Name</u> :- {item.name}</h3>
                    <h4><u>YEAR</u> :- {item.year}</h4>
                    <img src={item.path} alt="certificateImage" onClick={handleOpenImage} />
                    <div>
                        <Modal open={openImage} onClose={handleCloseImage}>
                            <div style={{ display: "flex" }}>
                                <img src={item.path} alt='certificateImage' style={{
                                    maxWidth: '80%',
                                    maxHeight: '90%',
                                    marginTop: `${up}px`,
                                    transform: `rotate(${rotation}deg)`, // Apply rotation
                                }} />
                                 <ul style={{ display: "flex" ,flexDirection: "column"}}>
                                <button style={{ backgroundColor: "white", maxHeight: "20px", maxWidth: "50px" }} onClick={setUpFun}>up</button>
                                <button style={{ backgroundColor: "white", maxHeight: "20px", maxWidth: "50px" }} onClick={setRotation}>Rotate</button>
                                <button style={{ backgroundColor: "white", maxHeight: "20px", maxWidth: "50px" }} onClick={setDownFun}>Down</button>
                                <button style={{ backgroundColor: "red", maxHeight: "20px", maxWidth: "25px" }} onClick={handleCloseImage}>X</button>
                                </ul>
                            </div>

                        </Modal>
                    </div>
                </div>


                <button onClick={handleClose} style={{ backgroundColor: "red", maxHeight: "20px", maxWidth: "25px" }}>X</button>
            </div>
        </Modal>

    </>);
}
export default EachCertificate;