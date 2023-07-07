import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

const ViewDetail = (props) => {
    const { viewSigleUser, onHide } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="custom-header">
                    {viewSigleUser?.firstName} Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Full Name: {`${viewSigleUser?.firstName} ${viewSigleUser?.lastName}`}</h4>
                <p>Email: {viewSigleUser?.email}</p>
                <p>User id: {viewSigleUser?.phoneNo}</p>
                <p>Age: {viewSigleUser?.age}</p>
                <p>Gender: {viewSigleUser?.gender}</p>
                <p>Phone no: {viewSigleUser?.phoneNo}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewDetail



// const CustomModal = ({ data, showPopup, setShowPopup }) => {
//     console.log(data)
//     return (
//         <div onClick={() => setShowPopup(false)} className='fixed bg-black bottom-0 left-0 top-0 right-0 flex justify-center items-center opacity-80 z-50' >
//             <div className='bg-white p-[10px] shadow-[0px 0px 0px #888] h-[300px] w-[300px] rounded-lg'>
//                 <button onClick={() => setShowPopup(false)} >close</button>
//                 <h2>{data.firstName}</h2>
//                 <h3>{data.email}</h3>
//                 <h4>{data.age}</h4>
//                 <p>{data?.gender}</p>
//             </div>
//         </div>
//     )
// }
// export default CustomModal
