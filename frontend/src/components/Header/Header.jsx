import React from "react";
import { Header } from "semantic-ui-react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const HeaderExamplePage = () => (
  <div>
    <Navbar />
    <Header>
      <p>Wild Circus</p>
    </Header>
  </div>
);

export default HeaderExamplePage;
