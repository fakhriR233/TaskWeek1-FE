import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const ModalLogin = ({ showLogin, setShowLogin, setShow }) => {
  // console.log(showLogin);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  let Navigate = useNavigate();

  function handleAdmin(e) {
    e.preventDefault();
    Navigate("/listtransactions");
  }

  function handleAccountLogin() {
    handleCloseLogin();
    setShow(true);
  }

  return (
    <div className="modal-container w-100">
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="modal-title my-3 mx-4">Login</Modal.Title>
          </Modal.Header>

          <Modal.Body className="mx-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="modal-register-group"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="modal-register-group"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
            <span className="mx-auto align-middle modal-account">
              Don't have an account ? Click{" "}
              <ins className="modal-account-here" onClick={handleAccountLogin}>
                Here
              </ins>
            </span>
          </Modal.Body>

          <Modal.Footer className="mx-4">
            <Button
              className="btn-modal-login w-100 my-3"
              variant="danger"
              type="submit"
              onClick={handleAdmin}
            >
              Login
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
};

export default ModalLogin;
