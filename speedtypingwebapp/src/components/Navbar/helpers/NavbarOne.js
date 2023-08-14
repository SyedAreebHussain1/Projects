import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { auth } from '../../../config/firabseConfig';
import { signOutWithGoogleApi } from '../../../redux/api/auths';
import SignOutModal from './SignOutModal';

const NavbarOne = ({ setIsAuth }) => {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    let [brithness, setBrithness] = useState()
    const userObject = JSON.parse(localStorage.getItem('userObject'))
    useEffect(() => {
        if (brithness) {
            document.body.style.backgroundColor = '#2c2626';
        } else {
            document.body.style.backgroundColor = '#bdbfbf';
        }
    }, [brithness])
    let handleSignOutWithGoogle = (e) => {
        e.preventDefault();
        if (auth) {
            signOutWithGoogleApi(dispatch, onSuccessSignOut, onFailureSignOut)
        }
    }
    function onSuccessSignOut(msg) {
        setIsAuth(false)
        localStorage.removeItem("token");
        localStorage.removeItem("userObject");
    }
    function onFailureSignOut(msg) { }
    return (<>
        <SignOutModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            handleSignOutWithGoogle={handleSignOutWithGoogle}
        />
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">{userObject?.fullName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="">Home</Nav.Link>
                        <NavDropdown title="Setting" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => setModalShow(true)}>
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav
                        className="me- my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div>
                            <div><h4 className='text-[12px]'>White/Dark</h4></div>
                            <label className="switch">
                                <input type="checkbox" onClick={(e) =>
                                    setBrithness(e.target.checked)} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div>
                            <img src={userObject?.profilePictureUrl} className="button button5" style={{
                                borderRadius: '50%',
                                border: '1px solid black',
                                width: "40px",
                                textAlign: 'center',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontSize: '16px',
                                margin: '4px 2px',
                            }} />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default NavbarOne