import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditModal({ show, updatedData, data, setShow }) {
    const [state, setState] = useState({})

    useEffect(() => {
        setState(updatedData.item)
    }, [updatedData])

    let objIndex = data.findIndex((obj => obj.id == updatedData?.item?.id))
    function handleUpdate(e) {
        e.preventDefault()
        if (state?.detail?.title && state?.detail?.description && state?.detail?.time) {
            data[objIndex] = state
            setShow(false)
            setState({
                id: '',
                detail: {
                    title: "",
                    description: "",
                    detail: ""
                }
            })
        }
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setState((prevData) => ({
            ...prevData,
            id: updatedData?.item?.id,
            detail: {
                ...prevData.detail,
                [name]: value
            }
        }))
    }

    const handleClose = () => {
        setShow(false)
        setState({
            id: '',
            detail: {
                title: "",
                description: "",
                detail: ""
            }
        })
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='input-group'>
                        <input type='text' name='title'
                            value={state?.detail?.title}
                            onChange={handleChange} placeholder='Tilte' />
                        <input type='text' name='description'
                            value={state?.detail?.description}
                            onChange={handleChange} placeholder='Des' />
                        <input type='text' name='time'
                            value={state?.detail?.time}
                            onChange={handleChange} placeholder='Date' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;