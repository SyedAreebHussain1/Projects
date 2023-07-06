import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { createCrudTwoApi } from '../../../redux/api/CrudTwo';
import AlertMsg from '../../../utils/AlertMsg';

const AddDataForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validation = {
        emailValidation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        phoneNoValidation: /^\d{11}$/
    }
    const [alertMsg, setAlertMsg] = useState({})
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        gender: '',
        profile: '',
        phoneNo: ''
    });
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if ((formData.firstName !== '' && formData.firstName !== null) &&
            (formData.lastName !== '' && formData.lastName !== null) &&
            (formData.email !== '' && formData.email !== null) &&
            (formData.age !== '' && formData.age !== null) &&
            (formData.gender !== '' && formData.gender !== null) &&
            (formData.profile !== '' && formData.profile !== null) &&
            (formData.phoneNo !== '' && formData.phoneNo !== null)) {
            if (validation.emailValidation.test(formData.email) && formData.phoneNo.match(validation.phoneNoValidation)) {
                createCrudTwoApi(dispatch, formData, onSuccess, onFailure)
            } else {
                setAlertMsg({
                    msg: !validation.emailValidation.test(formData.email) ? 'You have entered an invalid email address!' : '' ? validation.phoneNoValidation.test(formData.phoneNo) : 'Please Enter valid Phone Number',
                    keyName: "warning"
                })
            }
        } else {
            setAlertMsg({
                msg: "Please fill in all required fields.",
                keyName: "danger"
            })
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    function onSuccess(msg) {
        const form = formRef.current;
        if (msg) {
            setAlertMsg({
                msg: "Your Form has been submited",
                keyName: "success"
            })
            navigate('/read-crud')
            form.reset();
        }
    }
    function onFailure(msg) {
        console.log('error msg', msg)
        setAlertMsg({
            msg: "Error",
            keyName: "danger"
        })
    }
    return (
        <div style={{ margin: 'auto', width: '50%', padding: '10px' }} >
            <div>
                <Form ref={formRef} onSubmit={handleFormSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            F Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name="firstName" column sm='2' onChange={handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            L Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name='lastName' onChange={handleInputChange} column sm='2' />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name='email' onChange={handleInputChange} column sm='2' />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Phone no
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control maxLength={13} name='phoneNo' onChange={handleInputChange} column sm='2' />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Age
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control name='age' onChange={handleInputChange} placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Gender
                        </Form.Label>
                        <Col sm="10">
                            <Form.Check
                                label="Male"
                                name="gender"
                                type='radio'
                                value="male"
                                onChange={handleInputChange}
                            />
                            <Form.Check
                                label="Female"
                                name="gender"
                                type='radio'
                                value="female"
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="file">
                        <Form.Label column sm="2">Small file input example</Form.Label>
                        <Col sm='10'>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                name="profile"
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                    {alertMsg?.msg ? <AlertMsg alertMsg={alertMsg} /> : ''}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddDataForm