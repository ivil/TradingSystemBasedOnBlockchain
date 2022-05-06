import { Component, ReactNode } from "react";
import "./energy.css";
import Navigation from "../../components/Navigation";

export default class Energy extends Component {
  render(): ReactNode {
    return (
      <div id="energy">
        <Navigation />
        <div className="content"></div>
      </div>
    );
  }
}
