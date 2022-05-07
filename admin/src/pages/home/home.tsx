import { Component, ReactNode } from "react";
import Navigation from "../../components/Navigation";
import "./home.css";

export default class Home extends Component<any, any> {
  render(): ReactNode {
    return (
      <div id="home">
        <Navigation />
        <div className="content">
          <div>
            <div className="box">
              <h1>大风，已起</h1>
              <h2>在价值互联网的变革之中，塑造未来</h2>
              <h3> </h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
