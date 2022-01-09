import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import TaskDisplay from "./TaskDisplay";
import { DateContext } from "../javascript/context";
import TaskDisplayFinished from "./TaskDisplayFinished";


class ScrollBar extends React.Component {
  static contextType = DateContext;

  renderTaskDisplay = () => {
    if (this.context.viewMode !== "finished") return (<TaskDisplay />);

    return (<TaskDisplayFinished/>);

  };

  render() {
    return (
      <Scrollbars
        id="taskDisplay" //why must this be applied???
        style={{ height: "100%", }}
        renderTrackVertical={({ style, ...props }) =>
          <div id={"track"} {...props}
               style={{ ...style, backgroundColor: "#24292c", width: ".6vw", height: "60vh", top: "7vh", borderRadius: "10vw", position: "relative", left: "72.8vw" }} />
        }
        renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: "#fc5353", borderRadius: "10vw", minHeight: "30%" }} />
        }
        renderView={({ style, ...props }) =>
          <div {...props} style={{ ...style, overflowX: "hidden", marginBottom: "0" }} />
        }
      >
        {this.renderTaskDisplay()}
      </Scrollbars>
    );
  }


}

export default ScrollBar;