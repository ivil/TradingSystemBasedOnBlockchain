import { Component, ReactNode } from "react";
import Navigation from "../../components/Navigation";
import "./home.css";

export default class Home extends Component<any, any> {
  render(): ReactNode {
    return (
      <div id="home">
        <Navigation />
        <div className="content">
            {/* <h3>ivil.world</h3> */}
        </div>
      </div>
    );
  }
}
