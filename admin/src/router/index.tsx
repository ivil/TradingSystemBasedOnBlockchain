import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Energy from "../pages/admin/energy";
import Contract from "../pages/admin/contract";

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
