import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const dataUser = {
  email: "",
  password: "",
  phone: "",
};

const ModalRegister = ({
  show,
  setShow,
  setShowLogin,
  isLogin,
  setisLogin,
}) => {
  const [data, setData] = useState(dataUser);
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let Navigate = useNavigate();

  function handleAccount() {
    handleClose();
    setShowLogin(true);
  }

  function handleRegister(e) {
    e.preventDefault();
    handleClose();
    setisLogin(true);
    Navigate("/");
    localStorage.setItem("user", JSON.stringify(data));
  }

  return (
    <div className="modal-container w-100">
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Form onSubmit={handleRegister}>
            <Modal.Header>
              <Modal.Title className="modal-title my-3">Register</Modal.Title>
            </Modal.Header>

            <Modal.Body className="mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="modal-register-group"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="modal-register-group"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Control
                  className="modal-register-group"
                  type="Text"
                  placeholder="Full Name"
                  name="fullname"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Control
                  className="modal-register-group"
                  type="Text"
                  placeholder="Gender"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control
                  className="modal-register-group"
                  type="Text"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control
                  className="modal-register-group"
                  type="Text"
                  placeholder="Address"
                  name="address"
                />
              </Form.Group>
              <span className="mx-auto align-middle modal-account">
                Already have an account ? Click{" "}
                <ins className="modal-account-here" onClick={handleAccount}>
                  Here
                </ins>
              </span>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="btn-modal-register w-100 my-3"
                variant="light"
                type="submit"
                onClick={handleRegister}
              >
                Register
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default ModalRegister;
