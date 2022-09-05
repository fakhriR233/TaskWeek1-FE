import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import TopNavbarAdmin from "../Components/Utility/TopNavAdmin";
import Thumbnail from "../Images/Icons/Attachment.png";

const AdminAddMovies = () => {
  let Navigate = useNavigate();

  function addButtonHandler() {
    Navigate("/addlistpage");
  }
  return (
    <div>
      <TopNavbarAdmin />
      <div className="admin-add-movie-body">
        <Form className="w-75 mx-auto">
          <h2 className="admin-add-movie-title py-4">Add Film</h2>
          <Row className="mb-3">
            <Col xs={9}>
              <Form.Control
                placeholder="Title"
                className="admin-add-movie-form"
              />
            </Col>
            <Col>
              <Form.Group controlId="formThumb">
                <Form.Label className="admin-add-movie-thumb text-start pt-1">
                  <p className="ms-3">Attach Thumbnail</p>
                </Form.Label>
                <Form.Control
                  placeholder="Attach Thumbnail"
                  className="admin-add-movie-thumb-file"
                  type="file"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridYear">
            <Form.Control placeholder="Year" className="admin-add-movie-form" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridCategory">
            <Form.Select
              defaultValue="Category..."
              className="admin-add-movie-form"
            >
              <option>Choose...</option>
              <option>Action</option>
              <option>Comedy</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formGridDesc">
            <Form.Control
              as="textarea"
              placeholder="Description"
              className="admin-add-movie-form"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col xs={9}>
              <Form.Control
                placeholder="Title Episode"
                className="admin-add-movie-form"
              />
            </Col>
            <Col>
              <div className="d-flex">
                <Form.Control placeholder="Attach Thumbnail" />
                <img
                  src={Thumbnail}
                  width="15"
                  height="100%"
                  alt="Thumbnail"
                  className="mt-2 mx-1"
                />
              </div>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formGridLinkFilm">
            <Form.Control
              placeholder="Link Film"
              className="admin-add-movie-form"
            />
          </Form.Group>

          <Button
            className="admin-add-movie-btn-add btn-lg w-100 mb-3"
            variant="outline-light"
          >
            +
          </Button>

          <Button
            variant="danger"
            type="submit"
            className="admin-add-movie-button"
            onClick={addButtonHandler}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminAddMovies;
