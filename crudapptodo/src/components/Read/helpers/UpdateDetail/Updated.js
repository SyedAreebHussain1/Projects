import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getReadListApi, updatedSingleDataApi } from '../../../../redux/api/CrudTwo';
import Row from 'react-bootstrap/Row';
import AlertMsg from '../../../../utils/AlertMsg';

const Updated = (props) => {
  const { data, onHide } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [alertMsg, setAlertMsg] = useState({})
  const formRef = useRef(null);
  const validation = {
    emailValidation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    phoneNoValidation: /^\d{11}$/
  }


  useEffect(() => {
    if (data) {
      setFormData(data)
    }
  }, [data])
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
        updatedSingleDataApi(dispatch, formData?.id, formData, onSuccess, onFailure)
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
  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function onSuccess(msg) {
    const form = formRef.current;
    getReadListApi(dispatch)
    onHide()
    setAlertMsg({
      msg: "",
      keyName: ""
    })
    form.reset();
  }
  function onFailure(msg) {
    setAlertMsg({
      msg: "Error",
      keyName: "danger"
    })
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='flex'><span>Edit id: {formData?.id} </span> </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form ref={formRef}
          onSubmit={handleFormSubmit}
        >
          <Form.Group
            // as={Row}
            className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              F Name
            </Form.Label>
            <Col sm="10">
              <Form.Control name="firstName" value={formData?.firstName} column sm='2'
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            // as={Row}
            className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              L Name
            </Form.Label>
            <Col sm="10">
              <Form.Control name='lastName'
                value={formData?.lastName}
                onChange={handleInputChange}
                column sm='2' />
            </Col>
          </Form.Group>
          <Form.Group
            // as={Row}
            className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control name='email'
                value={formData?.email}
                onChange={handleInputChange}
                column sm='2' />
            </Col>
          </Form.Group>
          <Form.Group
            // as={Row}
            className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Phone no
            </Form.Label>
            <Col sm="10">
              <Form.Control maxLength={13} name='phoneNo'
                value={formData?.phoneNo}
                onChange={handleInputChange}
                column sm='2' />
            </Col>
          </Form.Group>
          <Form.Group
            // as={Row} 
            className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Age
            </Form.Label>
            <Col sm="10">
              <Form.Control name='age'
                value={formData?.age}
                onChange={handleInputChange}
                placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group
            // as={Row}
            className="mb-3">
            <Form.Label column sm="2">
              Gender
            </Form.Label>
            <Col sm="10">
              <Form.Check
                label="Male"
                name="gender"
                type='radio'
                value="male"
                checked={formData?.gender === 'male' ? true : false}
                onChange={handleInputChange}
              />
              <Form.Check
                label="Female"
                name="gender"
                type='radio'
                value="female"
                checked={formData?.gender === 'female' ? true : false}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            // as={Row}
            className="mb-3" controlId="file">
            <Form.Label column sm="2">File</Form.Label>
            <Col sm='10'>
              <Form.Control
                type="file"
                accept="image/*"
                name="profile"
                onChange={handleInputChange}
              />
              <h4>File Name{formData?.profile}</h4>
            </Col>
          </Form.Group>
          {alertMsg?.msg ? <AlertMsg alertMsg={alertMsg} /> : ''}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default Updated
