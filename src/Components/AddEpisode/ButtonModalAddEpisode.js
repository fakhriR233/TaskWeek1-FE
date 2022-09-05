import React from "react";
import AddEpisode from "./AddEpisode";

function ButtonModalAddEpisode(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <button
        className="btn btn-danger w-100"
        onClick={() => setModalShow(true)}
      >
        Add Film
      </button>

      <AddEpisode show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ButtonModalAddEpisode;
