import { Component, ReactNode } from "react";
import "./contract.css";
import Navigation from "../../components/Navigation";

export default class Contract extends Component {
  render(): ReactNode {
    return (
      <div id="contract">
        <Navigation />
        <div className="content"></div>
      </div>
    );
  }
}
