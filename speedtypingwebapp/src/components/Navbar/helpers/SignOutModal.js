import React from 'react'
import Modal from 'react-bootstrap/Modal';

const SignOutModal = ({ handleSignOutWithGoogle, ...props }) => {
    const userObject = JSON.parse(localStorage.getItem('userObject'))

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Email: {userObject?.email}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{userObject?.fullName}</h4>
            <p>
                Thank you for using Speed Typing
            </p>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={props.onHide} className="button-23" role="button">Close</button>
            <button onClick={handleSignOutWithGoogle} className="button-24" role="button">LOGOUT</button>
        </Modal.Footer>
    </Modal>
}

export default SignOutModal