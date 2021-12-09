import React from "react";
import "../css/index.css";
import doneMarker from "../images/doneMarker.svg";
import doneMarkerComplete from "../images/doneMarkerComplete.svg";

class Task extends React.Component {
  handleHover(image) {
    image.target.src = doneMarkerComplete;
  }

  handleNoHover(image) {
    image.target.src = doneMarker;
  }

  render() {
    return (
      <div className="task">
        <img
          className="task__doneMarker--incomplete"
          src={doneMarker}
          onMouseEnter={(e) => this.handleHover(e)}
          onMouseLeave={(e) => {
            this.handleNoHover(e);
          }}
        ></img>
        <p className="task__description">Feed Mimi and Ziek</p>
      </div>
    );
  }
}

export default Task;
